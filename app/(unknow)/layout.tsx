import '../globals.scss'

import styles from "./layout.module.scss";



export default async function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head/>
        <body className={styles.body}>
        <div style={{flexGrow: 1}}>{children}</div>
        </body>
        </html>
    )
}
