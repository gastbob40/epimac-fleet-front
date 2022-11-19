'use client';

import * as React from "react"
import hotToast, {Toaster as HotToaster} from "react-hot-toast"

import styles from '../app/styles/toast.module.scss'

import {Icons} from "@/components/icons"

export const Toaster = HotToaster

interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
    visible: boolean
}

export function Toast({visible, className, ...props}: ToastProps) {
    return (
        <div
            className={`${styles.toast} ${className}`}
            {...props}
        />
    )
}


interface ToastIconProps extends Partial<React.SVGProps<SVGSVGElement>> {
    name: keyof typeof Icons
}

Toast.Icon = function ToastIcon({name, className, ...props}: ToastIconProps) {
    const Icon = Icons[name]

    if (!Icon) {
        return null
    }

    return (
        <div>
            <Icon {...props} />
        </div>
    )
}

interface ToastTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
}

Toast.Title = function ToastTitle({className, ...props}: ToastTitleProps) {
    return <p className={styles.toast__title} {...props} />
}

interface ToastDescriptionProps
    extends React.HTMLAttributes<HTMLParagraphElement> {
}

Toast.Description = function ToastDescription({...props}: ToastDescriptionProps) {
    return <p className={styles.toast__description} {...props} />
}

interface ToastOpts {
    title?: string
    message: string
    type?: "success" | "error" | "default"
    duration?: number
}

export default function toast(opts: ToastOpts) {
    const {title, message, type = "default", duration = 3000} = opts

    const className = `${styles[`toast__${type}`]}`

    return hotToast.custom(
        ({visible}) => (
            <Toast
                className={className}
                visible={visible}>
                <Toast.Title>{title}</Toast.Title>
                {message && <Toast.Description>{message}</Toast.Description>}
            </Toast>
        ),
        {duration}
    )
}

