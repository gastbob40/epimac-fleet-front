import '../globals.scss'
import Link from "next/link";
import Macs from "./macs";
import {getMacs} from "@/lib/api";
import {signOut} from "next-auth/react";
import Header from "@/components/layout/header";


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
       <Header />

        <Macs macs={macs}/>

        <div style={{flexGrow: 1}}>{children}</div>
        </body>
        </html>
    )
}
