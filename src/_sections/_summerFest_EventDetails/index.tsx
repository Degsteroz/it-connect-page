import React from 'react';
import Link from 'next/link';

import styles from './styles.module.sass';

export default function EventDetails() {
  return (
    <section className={styles.eventDetails}>
      <h2 className={styles.title}>
        Our <span style={{ color: '#82ff08' }}>event</span> Info
      </h2>

      <ul className={styles.list}>
        <li><span>Organizer:</span> <Link href={'/'} target="_blank">IT Connect</Link></li>
        <li><span>Language:</span> English</li>
        <li><span>Age restriction:</span> 18+</li>
        <li><span>🐶 Dog friendly</span></li>
      </ul>

      <Link
        href={'#tickets'}
        className={styles.cta}
      >
        Buy some tickets!
      </Link>
    </section>
  );
}
