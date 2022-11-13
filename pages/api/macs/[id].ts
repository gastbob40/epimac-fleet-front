import {withMethods} from "@/lib/api-middlewares/with-methods";
import {withAuthentication} from "@/lib/api-middlewares/with-authentification";
import {getMac, getMacs} from "@/lib/api";
import {NextApiRequest, NextApiResponse} from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const id = req.query.id as string;
    const mac = await getMac(id);

    if (mac === null) {
        res.status(404).end();
        return;
    }

    res.status(200).json(mac);
}

export default withMethods(['GET'], withAuthentication(handler));
