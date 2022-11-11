'use client';

import React, {useState} from "react";
import styles from "../../app/styles/tabs.module.scss";


type TabsConfig = {
    label: string;
    id: string;
    element: React.ReactNode;
}[]

export default function Tabs({config}: {
    config: TabsConfig;
}) {
    const [activeTab, setActiveTab] = useState(config[0].id);

    return (
        <>
            <div className={styles.tab__list}>
                {config.map((tab) => (
                    <div className={styles.tab__list__item} key={tab.id}  aria-current={tab.id === activeTab}>
                        <div className={styles.tab__list__item__label}
                            onClick={() => setActiveTab(tab.id)}>
                            {tab.label}
                        </div>
                        <div className={styles.tab__list__item__widget}></div>
                    </div>
                ))}
            </div>

            <div className={styles.tab__content}>
                {config.map((tab) => tab.id === activeTab && tab.element)}
            </div>
        </>
    );
}
