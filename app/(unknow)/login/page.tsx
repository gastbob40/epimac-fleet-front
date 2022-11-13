'use client';

import React, {useRef} from "react";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";

export default function Login() {
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const router = useRouter();

    async function onSubmitForm(event: React.FormEvent) {
        event.preventDefault();

        const email = emailInputRef.current?.value;
        const password = passwordInputRef.current?.value;

        if (email && password) {
            const result = await signIn('credentials', {
                redirect: false,
                email: email,
                password: password
            })

            console.log(result);
            if (!result!.error) {
                await router.replace('/');
            }
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmitForm}>
                <div>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' required ref={emailInputRef}/>
                </div>

                <div>
                    <label htmlFor='password'>Your Password</label>
                    <input type='password' id='password' required ref={passwordInputRef}/>
                </div>

                <button>submit</button>
            </form>
        </div>
    );
}
