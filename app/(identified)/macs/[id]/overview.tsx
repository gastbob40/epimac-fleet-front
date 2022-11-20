import {MacDetails} from "@/types/macDetails";
import styles from "./page.module.scss";

export default function Overview({mac}: { mac: MacDetails }) {
    return (
        <>
            <h2>iMac properties</h2>

            <div className={styles.overview__properties}>
                <div className={styles.overview__properties__item}>
                    <h3>General information</h3>

                    <div className={styles.overview__properties__item__property}>
                        <label>Label</label>
                        <div>{mac.label}</div>
                        <label>IP</label>
                        <div>{mac.ip}</div>
                        <label>Mac User</label>
                        <div>{mac.mac_user}</div>
                    </div>
                </div>

                <div className={styles.overview__properties__item}>
                    <h3>Software properties</h3>

                    <div className={styles.overview__properties__item__property}>
                        <label>MacOS version</label>
                        <div>{mac.macos_version}</div>
                        <label>Build version</label>
                        <div>{mac.macos_build_version}</div>
                    </div>
                </div>

                <div className={styles.overview__properties__item}>
                    <h3>Hardware properties</h3>

                    <div className={styles.overview__properties__item__property}>
                        <label>Serial number</label>
                        <div>{mac.serial_number}</div>
                        <label>Storage capacity</label>
                        <div>{mac.storage_capacity} Gb</div>
                        <label>Memory</label>
                        <div>{mac.memory} Gb</div>
                        <label>CPU cores</label>
                        <div>{mac.cpu_cores}</div>
                    </div>
                </div>
            </div>

            <h2>Fleet Data</h2>

            <div className={styles.overview__properties}>
                <div className={styles.overview__properties__item}>
                    <h3>Daemon</h3>

                    <div className={styles.overview__properties__item__property}>
                        <label>Status</label>
                        <div>{mac.status}</div>
                        <label>Report status</label>
                        <div>{mac.report_status ? 'True' : 'False'}</div>
                        <label>Last seen at</label>
                        <div>{(new Date(mac.last_seen)).toLocaleString()}</div>
                    </div>
                </div>
            </div>

        </>
    );
}
