import React from 'react';
import Link from 'next/link';
import { MailOutlined } from '@ant-design/icons';

import styles from './styles.module.sass';

export default function PartnershipBlock() {
  return (
    <section className={styles.partnershipBlock}>
      <div className={styles.title}>
        Become <span style={{ color: '#82ff08' }}>a</span> partner
      </div>
      <h2 className={styles.subtitle}>
        Want to bring your <span style={{ color: '#82ff08' }}>whole team</span> or become a partner?
      </h2>
      <p className={styles.text}>
        ✨ Get in touch for group packages and sponsorship opportunities!
      </p>

      <Link
        href="mailto:itconnectsocialnetworks@gmail"
        className={styles.button}
      >
        <MailOutlined />
        Contact us
      </Link>
    </section>
  );
}
