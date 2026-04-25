'use client';
import React from 'react';
import Image from 'next/image';

import styles from './styles.module.sass';
import { useViewPort } from '@/_hooks';

export default function TedxSection() {
  const { isMobile } = useViewPort();

  const image = isMobile
    ? (
      <Image
        className={styles.image}
        src={'https://res.cloudinary.com/dtecpsig5/image/upload/v1777153782/it-connect-events/tedx_looking_for_speakers_stories_sk9f5r.png'}
        alt=""
        width="324"
        height="522"
      />
    )
    : (
      <Image
        className={styles.image}
        src={'https://res.cloudinary.com/dtecpsig5/image/upload/v1777148886/it-connect-events/tedx_looking_for_speakers_linkedin_dkiv64.png'}
        alt=""
        width='900'
        height='472'
      />
    );
  return (
    <div className={styles.section}>
      {image}
      <div className={styles.ctaBlock}>
        <div className={styles.actions}>
          <a href="https://forms.gle/QvgRHeQtN33Ua5ot5" className={styles.primaryBtn}>
            BECOME A SPEAKER
          </a>
        </div>
        <div className={styles.networks}>
          <a
            href="https://www.linkedin.com/company/tedxsavskivenac/"
            className={styles.socialBtn}
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
          </a>
          <a
            href="https://www.instagram.com/tedxsavskivenac/"
            target="_blank"
            rel="noreferrer"
            className={styles.socialBtn}
          >
            INSTAGRAM
          </a>
        </div>
        <div className={styles.date}>October 10, 2026</div>
      </div>
    </div>
  );
}
