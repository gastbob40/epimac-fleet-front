import {Mac} from "@/types/mac";
import {MacDetails} from "@/types/macDetails";
import exp from "constants";
import {User} from "next-auth";

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

export async function postLogin(email: string, password: string) { // TODO: Add return type
    const apiHost = process.env.API_HOST;
    const response = await fetch(`${apiHost}/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    if (!response.ok) {
        return null;
    }

    return await response.json();
}

export async function postRegisterRequest(email: string, explication: string): Promise<boolean> {
    const apiHost = process.env.API_HOST;
    const response = await fetch(`${apiHost}/api/auth/register`, {
        method: 'POST',
        body: JSON.stringify({
            email,
            explication
        })
    });

    return response.ok;
}

export async function getAccountFromEmail(email: string): Promise<any> {
    const apiHost = process.env.API_HOST;
    const response = await fetch(`${apiHost}/api/auth/exists`, {
        method: 'POST',
        body: JSON.stringify({
            email
        })
    });

    if (!response.ok) {
        return null;
    }

    return await response.json();
}
