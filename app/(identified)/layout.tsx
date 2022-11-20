import '../globals.scss'
import Macs from "./macs";
import {getMacs} from "@/lib/api";
import Header from "@/components/layout/header";

interface DashboardLayoutProps {
    children?: React.ReactNode
}


export default async function DashboardLayout({children}: DashboardLayoutProps) {
    const macs = await getMacs();

    return (
        <div style={{display: 'flex', height: '100%'}}>
            <Header/>
            <Macs macs={macs}/>

            {children}
        </div>
    )
}
