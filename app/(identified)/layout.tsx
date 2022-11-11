import '../globals.scss'
import Link from "next/link";
import styles from "./page.module.scss";
import MacCard from "../../lib/components/macCard";
import {Mac} from "../../lib/types/mac";

async function getMacs(): Promise<Mac[]> {
    const apiHost = process.env.API_HOST;
    const response = await fetch(`${apiHost}/api/imacs`);
    return (await response.json())['imacs'];
}


export default async function RootLayout({children}: {
    children: React.ReactNode
}) {
    const macs = await getMacs();

    return (
        <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head/>
        <body>

        <header>
            <nav>
                <img src={"/epimac.png"} alt={"EpiMac"}/>

                <Link href={"/"}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 576 512" style={{opacity: 100}}>
                        <path
                            d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z"
                            fill={"currentColor"}/>
                    </svg>
                </Link>

                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 448 512">
                    <path
                        d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                        fill={"currentColor"}/>
                </svg>
            </nav>


            <nav>
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 512 512">
                    <path
                        d="M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V384c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32h64zM504.5 273.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32H320v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z"
                        fill={"currentColor"}/>
                </svg>
            </nav>

        </header>

        <div className={styles.macs}>
            <input type="text" className={styles.macs__input} placeholder={"Search for a mac"}/>

            <div className={styles.macs__meta}>{macs.length} macs results found</div>

            <div className={styles.macs__list}>
                {macs.map((mac) => <MacCard key={mac.id} mac={mac}></MacCard>)}
            </div>
        </div>
        <div style={{flexGrow: 1}}>{children}</div>
        </body>
        </html>
    )
}
