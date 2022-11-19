'use client';

import {Mac} from "@/types/mac";
import styles from "./page.module.scss";
import toast from "@/components/toast";

type ActionProps = {
    mac: Mac
}

export default function MacActions({mac}: ActionProps) {
    function awakeMac() {
        console.log("awake mac")
        toast({
            title: 'An error as occurred',
            message: 'Accusamus, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            type: 'error',
            duration: 5000
        })

        toast({
            title: 'All of this works',
            message: 'Accusamus, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            type: 'default',
            duration: 5000
        })
    }

    return (
        <div className={styles.page__header__action}>
            <button onClick={() => awakeMac()}>Awake</button>
            <button>Unlock</button>
            <button className={styles.button__danger}>Logout</button>
            <button className={styles.button__danger}>Restart</button>
        </div>
    );
}
