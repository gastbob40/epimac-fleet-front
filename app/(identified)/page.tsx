import {Mac} from "../../lib/types/mac";

import styles from './page.module.scss';

async function getMacs(): Promise<Mac[]> {
    const apiHost = process.env.API_HOST;
    const response = await fetch(`${apiHost}/api/imacs`);
    return await response.json();
}

export default async function Home() {
    return (
        <div className={styles.selection}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z"
                      fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"
                      d="M220 220h32v116"/>
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"
                      d="M208 340h88"/>
                <path d="M248 130a26 26 0 1026 26 26 26 0 00-26-26z" fill={'currentColor'}/>
            </svg>

            <div>Select an iMac to start</div>
        </div>
    )
}
