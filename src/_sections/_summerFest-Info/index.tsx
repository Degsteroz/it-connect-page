'use client';
import React from 'react';

import MarqueeTags from '@/_sections/_summerFest-Info/components/MarqueeTags';
import EventCarousel from '@/_sections/_summerFest-Info/components/EventCardCarousel';

import styles from './styles.module.sass';
import { HeatMapOutlined } from '@ant-design/icons';

export default function SummerFestInfo() {
  return (
    <div className={styles.infoPage}>
      <div className={styles.contentWrapper}>
        <div className={styles.title}>
          About the event
        </div>
        <div className={styles.subtitle}>
          <HeatMapOutlined />
          <div>What to expect</div>
          <HeatMapOutlined />
        </div>
        <EventCarousel />
        <MarqueeTags />
      </div>
    </div>
  );
};
