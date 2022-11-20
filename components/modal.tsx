import styles from '../app/styles/modal.module.scss';
import React from "react";

type ModalProps = {
    visible: boolean;
    cancelText: string;
    onCancel: () => void;
    submitText: string;
    onSubmit: () => void;

    title: string;

    children?: React.ReactNode;
}

export default function Modal({visible, cancelText, submitText, title, onCancel, onSubmit, children}: ModalProps) {
    const modalContent = React.useRef<HTMLDivElement>(null);

    function handleClickOutside(event: React.MouseEvent<HTMLDivElement>) {
        if (modalContent.current && !modalContent.current.contains(event.target as Node)) {
            onCancel();
        }
    }

    return (
        <div className={(visible ? 'modal' : styles.modal__hidden) + ' ' + styles.modal}
             onClick={handleClickOutside}>

            <div className={styles.modal__content} ref={modalContent}>
                <div className={styles.modal__title}>
                    {title}
                </div>

                {children &&
                    <div className={styles.modal__body}>
                        {children}
                    </div>}

                <div className={styles.modal__buttons}>
                    <button className={styles.button__negative} onClick={onCancel}>{cancelText}</button>

                    <button style={{width: '100%'}} onClick={onSubmit}>{submitText}</button>
                </div>
            </div>
            {children}
        </div>
    );
}
