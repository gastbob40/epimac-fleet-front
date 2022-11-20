import './globals.scss';
import {Toaster} from "@/components/toast";

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    console.log('RootLayout ================================================================================');
    return (
        <html lang="en">
        <head />

        <body>

        {children}
        <Toaster position="bottom-right" />

        </body>
        </html>
    )
}
