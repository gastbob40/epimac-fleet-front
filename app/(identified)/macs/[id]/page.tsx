import {Mac} from "../../../../lib/types/mac";
import styles from './page.module.scss';

type PageParams = {
    id: string
}

async function getMac(macId: number) {
    const apiHost = process.env.API_HOST;
    const response = await fetch(`${apiHost}/api/imacs`);
    const macs = (await response.json())['imacs'];

    return macs.find((mac: Mac) => mac.id === macId);
}

export default async function Page({params}: { params: PageParams }) {
    const mac = await getMac(parseInt(params.id));

    const statusClass = mac.status === 'Unavailable' ? styles.page__header__title__status__unavailable :
        mac.status === 'In Use' ? styles.page__header__title__status__in_use : '';

    const updatedAt = new Date(mac.last_seen);
    const updatedAtString = `${updatedAt.toLocaleDateString()} ${updatedAt.toLocaleTimeString()}`;

    return (<div className={styles.a}>

        <div className={styles.page__header}>
            <div className={styles.page__header__title}>
                <div>
                    <h1>{mac.label}</h1>
                    <div className={`${styles.page__header__title__status} ${statusClass}`}>{mac.status}</div>
                </div>

                <div>
                    <div className={styles.page_header__title__serial_number}>{mac.serial_number}</div>
                    <div className={styles.page_header__title__update}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path
                                d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z"
                                fill={'currentColor'}/>
                        </svg>
                        Updated on {updatedAtString}
                    </div>


                </div>
            </div>
        </div>

    </div>)
}
