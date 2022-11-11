import {Mac} from "../../lib/types/mac";

import styles from './page.module.css';

async function getMacs(): Promise<Mac[]> {
    const apiHost = process.env.API_HOST;
    const response = await fetch(`${apiHost}/api/imacs`);
    return await response.json();
}

export default async function Home() {
    const macs = await getMacs();

    return (
        <div className={styles.test}>aze</div>
    )
}
