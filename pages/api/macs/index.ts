import {withMethods} from "@/lib/api-middlewares/with-methods";
import {withAuthentication} from "@/lib/api-middlewares/with-authentification";
import {getMacs} from "@/lib/api";
import {NextApiRequest, NextApiResponse} from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const macs = await getMacs();
    res.status(200).json(macs);
}

export default withMethods(['GET'], withAuthentication(handler));