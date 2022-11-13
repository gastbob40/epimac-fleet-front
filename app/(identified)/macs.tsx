import styles from "./page.module.scss";
import MacCard from "../../lib/components/macCard";
import {Mac} from "../../lib/types/mac";
import useSWR from "swr";
import {useSession} from "next-auth/react";
import {redirect} from "next/navigation";

// @ts-ignore
const fetcher = (...args: any) => fetch(...args).then(res => res.json())

function useMacs() {
    console.log(process.env.API_HOST)
    const {data, error} = useSWR(`/api/macs`, fetcher)

    return {
        macs: data,
        isLoading: !error && !data,
        isError: error || data?.error
    }
}

export default function Macs() {
    const {data: user, status} = useSession()

    const {macs, isLoading, isError}: {
        macs: Mac[],
        isLoading: boolean,
        isError: boolean
    } = useMacs();


    if (status === 'unauthenticated') {
        return redirect('/login')
    }


    return (<div className={styles.macs}>
        {isLoading && <div>Loading...</div> || <>
            <input type="text" className={styles.macs__input} placeholder={"Search for a mac"}/>

            <div className={styles.macs__meta}>{macs.length} macs results found</div>

            <div className={styles.macs__list}>
                {macs.map((mac) => <MacCard key={mac.id} mac={mac}></MacCard>)}
            </div>
        </>}
    </div>);
}
