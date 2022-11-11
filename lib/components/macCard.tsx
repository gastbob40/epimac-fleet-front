'use client';

import {Mac} from "../types/mac";
import styles from '../../app/(identified)/page.module.css';
import Link from "next/link";
import {useSelectedLayoutSegments} from 'next/navigation';
import {useEffect, useState} from "react";
import StatusBadge from "./statusBadge";

export default function MacCard({mac}: { mac: Mac }) {
    const segments = useSelectedLayoutSegments();
    const macId = segments.length > 1 && segments[0] === 'macs' ? segments[1] : null;
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        setIsClicked(mac.id.toString() === macId);
    }, [macId, mac.id]);

    return (
        <Link href={`/macs/${mac.id}`} onClick={() => setIsClicked(true)}>
            <div className={`${styles.mac__list__item} ${mac.id.toString() === macId || isClicked ? styles.mac__list__item__active : ""}`}>
                <div className={styles.mac__list__item__upper}>

                    <div className={styles.mac__list__item__name}>
                        <span>{mac.serial_number}</span>
                        {mac.label}
                    </div>


                    <StatusBadge status={mac.status} small={true} />
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
