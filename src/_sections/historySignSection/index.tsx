import React from 'react';
import Image from 'next/image';

import belgrade from '@/_assets/historySignSection/belgrade.svg';

import styles from './styles.module.sass';

export default function HistorySignSection() {
  return (
    <section className={styles.signSection}>
      <div className={styles.content}>
        <div className={styles.titleBlock}>
          <div className={styles.title}>
            Born in Belgrade, built by friends
          </div>
          <div className={styles.subtitle}>
            <div>Since 2022, IT Connect has been bringing tech minds together</div>
            <div>to share knowledge and grow</div>
          </div>
        </div>

        <Image
          src={belgrade}
          style={{ margin: '0 auto' }}
          alt=""
          width={518}
          height={95}
        />
      </div>
    </section>
  );
};
