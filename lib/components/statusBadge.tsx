import {MacStatus} from "../../types/macStatus";
import styles from "../../app/styles/status.module.scss";

export default function StatusBadge({status, small = false}: {
    status: MacStatus,
    small?: boolean
}) {
    const statusClass = status === 'Unavailable' ? styles.status__pill__unavailable :
        status === 'In Use' ? styles.status__pill__in_use : '';

    return <div className={`${styles.status__pill} ${statusClass} ${small ? styles.status__pill__small : ''}`}>{status}</div>;
}
