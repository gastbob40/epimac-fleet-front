'use client';

import {Mac} from "../types/mac";
import styles from '../../app/(identified)/page.module.css';
import Link from "next/link";
import {useSelectedLayoutSegments} from 'next/navigation';

export default function MacCard({mac}: { mac: Mac }) {
    const segments = useSelectedLayoutSegments();
    const macId = segments.length > 1 && segments[0] === 'macs' ? segments[1] : null;

    return (
        <Link href={`/macs/${mac.id}`}>
            <div className={`${styles.mac__list__item} ${mac.id.toString() === macId ? styles.mac__list__item__active : ""}`}>
                <div className={styles.mac__list__item__upper}>

                    <div className={styles.mac__list__item__name}>
                        <span>{mac.serial_number}</span>
                        {mac.label}
                    </div>


                    <div className={styles.mac__list__item__status}>
                        {mac.status}
                    </div>
                </div>

                <div className={styles.macs__list__item__delimiter}></div>

                <div className={styles.mac__list__item__lower}>
                    <div>{mac.ip}</div>
                    <div>macOS {mac.macos_version}</div>
                </div>
            </div>
        </Link>
    )
}

/*
{mac.serial_number}
            {mac.label}
            {mac.status}

            {mac.ip} {mac.macos_version}
 */
