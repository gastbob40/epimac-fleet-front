import {NextApiRequest, NextApiResponse} from "next";
import {withMethods} from "@/lib/api-middlewares/with-methods";
import {postRegisterRequest} from "@/lib/api";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {email, explication} = req.body;

    if (!email || !explication) {
        return res.status(400).json({message: "Missing required fields"});
    }

    const success = await postRegisterRequest(email, explication);

    if (!success) {
        return res.status(500).json({message: "Something went wrong"});
    }

    return res.status(200).json({message: "Success"});
}

export default withMethods(['POST'], handler);
