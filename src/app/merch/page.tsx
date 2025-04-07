import React from 'react';

import styles from './styles.module.sass';
import Image from 'next/image';

import hoodie from '@/_assets/merchPage/hoodie.png';
import cap from '@/_assets/merchPage/cap.png';
import Link from 'next/link';

export default function MerchComingSoon() {
  const stringText = 'Скоро в продаже! · Coming soon! · まもなく発売！· Bientôt disponible ! · Bald erhältlich! · Uskoro u prodaji! ·';
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={`${styles.imageWrapper} ${styles.hoodie}`}>
            <Image src={hoodie} alt="Hoodie" className={styles.image}/>
          </div>
          <div className={`${styles.imageWrapper} ${styles.cap}`}>
            <Image src={cap} alt="Cap" className={styles.image}/>
          </div>
        </div>

        <div className={styles.right}>
          <h1 className={styles.title}>
            IT CONNECT <span className={styles.code}>0L10</span>
          </h1>
          <p className={styles.jp}>情報技術 × ベオグラード</p>
          <p className={styles.subtitle}>Merch Drop Incoming</p>
          <div className={styles.barcode}>■ ░ ░ █ ░ ░ ░ █ ░ ░ ░ ■</div>
          <Link href="/" className={styles.homeLink}>Home</Link>
        </div>
        <div className={styles.rightDecor}>
          <div className={styles.verticalBar}/>
          <span className={styles.status}>ACTIVE</span>
          <div className={styles.cornerLine}/>
          <span className={styles.jpScan}>システム監視中</span>
        </div>

      </div>

      <div className={styles.decals}>
        <span className={styles.stamp}>{'///'} SYSTEM: CONNECTED</span>
        <span className={styles.port}>PORT 44100</span>
        <span className={styles.codeblock}>ITC.GD</span>
        <div className={styles.cross}/>
        <div className={styles.arrowLine}/>
        <span className={styles.jpLabel}>ベオグラード・オンライン</span>
      </div>

      <div className={styles.tickerWrapper}>
        <div className={styles.tickerContent}>
          <span className={styles.tickerText}>{stringText}</span>
          <span className={styles.tickerText}>{stringText}</span>
        </div>
      </div>

    </div>
  );
}
