'use client';
import React from 'react';

import { useViewPort } from '@/_hooks';

import styles from './marquee_tags.module.sass';

const tags = [
  { text: '4 stages', color: '#06986f' },
  { text: '30+ speakers', color: 'green' },
  { text: 'job fair', color: 'gold' },
  { text: 'bbq', color: 'orange' },
  { text: 'tech expo zone', color: 'magenta' },
  { text: 'networking', color: 'cyan' },
  { text: 'activities', color: 'lime' },
  { text: '16.08.2025', color: 'geekblue' },
  { text: 'stand-up comedy', color: 'volcano' },
];

const MarqueeTags = () => {
  const { isMobile } = useViewPort();

  if (isMobile) {
    return (
      <div className={styles.tagWrapper}>
        {tags.map((tag) => (
          <div
            key={tag.text}
            className={styles.tag}
          >
            {tag.text}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.marquee_container}>
      <div className={styles.marquee_track}>
        <div className={styles.tagWrapper}>
          {tags.map((tag) => (
            <>
              <div
                key={tag.text}
                className={styles.tag}
              >
                {tag.text}
              </div>
              <div>夏</div>
            </>
          ))}
        </div>
        <div className={styles.tagWrapper}>
          {tags.map((tag) => (
            <>
              <div
                key={`${tag.text}-second`}
                className={styles.tag}
              >
                {tag.text}
              </div>
              <div>夏</div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeTags;
