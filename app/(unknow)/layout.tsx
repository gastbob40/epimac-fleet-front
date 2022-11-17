import '../globals.scss'

import styles from "./layout.module.scss";
import { NextSeo } from 'next-seo';
import SEO from "@/lib/seo.config";


export default async function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width"/>
            <NextSeo
                {...SEO}
                useAppDir={true}
            />
        </head>
        <body className={styles.body}>
        <div style={{flexGrow: 1}}>{children}</div>
        </body>
        </html>
    )
}
