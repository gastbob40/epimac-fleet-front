import {Mac} from "../../lib/types/mac";

async function getMacs(): Promise<Mac[]> {
    const apiHost = process.env.API_HOST;
    const response = await fetch(`${apiHost}/api/imacs`);
    return await response.json();
}

export default async function Home() {
    const macs = await getMacs();
    console.log(macs);

    return (
        <div></div>
    )
}
