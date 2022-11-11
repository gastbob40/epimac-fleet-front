import styles from './page.module.css';
import {Mac} from "../../lib/types/mac";

import MacCard from "../../lib/components/macCard";

async function getMacs(): Promise<Mac[]> {
    const apiHost = process.env.API_HOST;
    const response = await fetch(`${apiHost}/api/imacs`);
    return (await response.json())['imacs'];
}

export default async function Template({children}: {
    children: React.ReactNode
}) {
    const macs = (await getMacs()).slice(0, 10);

    return (<>
        <div className={styles.macs}>
            <input type="text" className={styles.macs__input} placeholder={"Search for a mac"}/>

            <div className={styles.macs__meta}>{macs.length} macs results found</div>

            <div className={styles.macs__list}>
                {macs.map((mac) => <MacCard key={mac.id} mac={mac}></MacCard>)}
            </div>
        </div>
        <div>{children}</div>
    </>);
}
