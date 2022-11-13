'use client';

import React, {useState} from "react";
import {useRouter} from "next/navigation";
import styles from "./register.module.scss";
import {Icons} from "@/components/icons"
import Link from "next/link";

export default function Login() {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isValid, setIsValid] = useState<boolean>(false);

    const router = useRouter();

    async function onSubmitForm(event: React.FormEvent) {
        event.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(event.target as HTMLFormElement);
        const email = formData.get('email');
        const explication = formData.get('explication');

        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                explication
            })
        });

        setIsSubmitting(false);

        console.log(response.status, response.ok)
        if (response.ok) {
            setIsValid(true);
        }

        return;
    }

    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <img className={styles.login__image} src={"/epimac-black.png"} alt={"EpiMac"}/>
                <h1 className={styles.login__title}>Request account</h1>
                <div className={styles.login__description}>Fill out this form to request access</div>

                <form onSubmit={onSubmitForm} className={styles.login__form}>
                    <div className={styles.form__group}>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder={'name@example.com'}
                            required
                        ></input>

                        <textarea
                            id='explication'
                            name='explication'
                            placeholder={'Why do you want to use Fleet By EpiMac?'}
                            required
                        />
                    </div>

                    <button className={styles.form__submit} disabled={isSubmitting || isValid}>
                        {isSubmitting && <Icons.spinner className={styles.login__submit__spinner}/>}
                        {isValid && <Icons.check className={styles.login__submit__check}/>}

                        {isValid ? 'Request sent' : 'Request access'}
                    </button>
                </form>

                <Link href={'/login'} className={styles.login__register}>
                    Already have an account? Sign in
                </Link>
            </div>
        </div>
    );
}
