import {Mac} from "../../../lib/types/mac";

import { authOptions } from "../auth/[...nextauth]"
import {unstable_getServerSession} from "next-auth";
import {Simulate} from "react-dom/test-utils";
import seeked = Simulate.seeked;

async function getMacs(): Promise<Mac[]> {
    const apiHost = process.env.API_HOST;
    const response = await fetch(`${apiHost}/api/imacs`, {
        next: {
            revalidate: 5
        }
    });

    return (await response.json())['imacs'];
}

export default async function handler(req: any, res: any) {
    const session = await unstable_getServerSession(req, res, authOptions);

    if (!session) {
        res.status(401).json({error: 'Not authenticated'});
        return;
    }

    console.log(session?.user?.name);

    const macs = await getMacs();
    res.status(200).json(macs);
}
