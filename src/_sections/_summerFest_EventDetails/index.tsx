import React from 'react';
import Link from 'next/link';

import styles from './styles.module.sass';

export default function EventDetails() {
  return (
    <section className={styles.eventDetails}>
      <h2 className={styles.title}>
        <div className={styles.sectorFrame}>
          <div className={styles.cyberBarcode} />
          Our event Info
        </div>
      </h2>

      <ul className={styles.list}>
        <li><span>Organizer:</span> <Link href={'/'} target="_blank">IT Connect</Link></li>
        <li><span>Language:</span> English</li>
        <li><span>Age restriction:</span> 18+</li>
        <li><span>Dog friendly</span></li>
      </ul>

      <Link
        href={'#tickets'}
        className={styles.cta}
      >
        <div className={styles.container}>
          <div>Buy some tickets!</div>
          <div>GO TOP</div>
        </div>
      </Link>
    </section>
  );
}
