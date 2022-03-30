import React from 'react';

import PageLayout from '../../src/components/layout/PageLayout'
import styles from '../../styles/SignIn.module.scss'

export default function Verify({ }) {
    return (
        <PageLayout>
            <div className={styles.sign_in_container}>
                <div className={styles.sign_in_body}>
                    CHECK YOUR EMAIL DUMMY
                </div>
            </div>
        </PageLayout>
    )
}
