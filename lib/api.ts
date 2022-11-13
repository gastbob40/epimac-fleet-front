import {Mac} from "../types/mac";
import {MacDetails} from "../types/macDetails";

export async function getMacs(): Promise<Mac[]> {
    const apiHost = process.env.API_HOST;
    const response = await fetch(`${apiHost}/api/imacs`, {
        next: {
            revalidate: 5
        }
    });

    return (await response.json())['imacs'];
}

export async function getMac(id: number | string): Promise<MacDetails | null> {
    const apiHost = process.env.API_HOST;
    const response = await fetch(`${apiHost}/api/imacs/${id}`, {
        next: {
            revalidate: 5
        }
    });

    if (response.status !== 200) {
        return null;
    }

    return await response.json();
}
