import styles from './page.module.scss';
import Tabs from "@/components/tabs";
import Overview from "./overview";
import StatusBadge from "@/components/statusBadge";
import {getMac} from "@/lib/api";
import {redirect} from "next/navigation";
import MacActions from "./actions";

type PageParams = {
    id: string
}

export default async function Mac({params}: { params: PageParams }) {
    const mac = await getMac(parseInt(params.id));

    if (!mac) return redirect("/")

    const updatedAt = new Date(mac.last_seen);
    const updatedAtString = `${updatedAt.toLocaleDateString()} ${updatedAt.toLocaleTimeString()}`;

    const tabsConfig = [
        {
            label: 'Overview',
            id: 'overview',
            element: <Overview mac={mac}/>
        },
        {
            label: 'Applications',
            id: 'applications',
            element: <div>Applications</div>
        },
        {
            label: 'Tasks',
            id: 'tasks',
            element: <div>Tasks</div>
        }
    ];

    return (<>
        <div className={styles.page__header}>
            <div className={styles.page__header__title}>
                <div>
                    <h1>{mac.label}</h1>
                    <StatusBadge status={mac.status}/>
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

          <MacActions mac={mac}/>
        </div>

        <Tabs config={tabsConfig}/>


    </>)
}
