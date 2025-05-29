'use client';
import React from 'react';

import MarqueeTags from '@/_sections/_summerFest-Info/components/MarqueeTags';
import EventCarousel from '@/_sections/_summerFest-Info/components/EventCardCarousel';

import styles from './styles.module.sass';

export default function SummerFestInfo() {
  return (
    <div className={styles.infoPage}>
      <div className={styles.contentWrapper}>
        <div className={styles.title}>
          About <span style={{ color: '#82ff08' }}>the</span> event
        </div>
        <div className={styles.subtitle}>
          What <span style={{ color: '#82ff08' }}>to</span> expect
        </div>
        <EventCarousel />
        <MarqueeTags />
      </div>
    </div>
  );
};
