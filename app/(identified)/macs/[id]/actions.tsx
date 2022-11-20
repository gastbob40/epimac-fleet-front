'use client';

import {Mac} from "@/types/mac";
import styles from "./page.module.scss";
import Modal from "@/components/modal";
import {useState} from "react";
import toast from "@/components/toast";

type ActionProps = {
    mac: Mac
}

export default function MacActions({mac}: ActionProps) {
    const [showModal, setShowModal] = useState(false);

    function awakeMac() {
        console.log("awake mac")
        setShowModal(true);
        /*toast({
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
        */
    }

    return (
        <>
            <div className={styles.page__header__action}>
                <button onClick={() => awakeMac()}>Awake</button>
                <button>Unlock</button>
                <button className={styles.button__danger}>Logout</button>
                <button className={styles.button__danger}>Restart</button>
            </div>

            <Modal visible={showModal}
                   title={'Do you want to awake this mac?'}
                   onCancel={() => {
                       setShowModal(false)
                   }}
                   cancelText={'Cancel'}
                   onSubmit={() => {
                       setShowModal(false)
                       toast({
                           title: 'Mac awakening',
                           message: 'The mac awakening has been scheduled. You can see the status in the task section.',
                           type: 'default',
                           duration: 5000
                       });
                   }}
                   submitText={'Awake'}>
            </Modal>
        </>
    );
}
