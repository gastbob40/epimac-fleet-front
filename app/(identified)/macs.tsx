import styles from "./page.module.scss";
import MacCard from "@/components/macCard";
import {Mac} from "@/types/mac";

export default function Macs({macs}: { macs: Mac[] }) {

    return (<div className={styles.macs}>
        <input type="text" className={styles.macs__input} placeholder={"Search for a mac"}/>

        <div className={styles.macs__meta}>{macs.length} macs results found</div>

        <div className={styles.macs__list}>
            {macs.map((mac) => <MacCard key={mac.id} mac={mac}></MacCard>)}
        </div>
    </div>);
}
