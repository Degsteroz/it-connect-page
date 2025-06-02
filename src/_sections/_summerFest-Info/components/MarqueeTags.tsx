'use client';
import React from 'react';
import { Tag } from 'antd';

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
  { text: 'stand-up comedy', color: 'volcano' },
  { text: '16.08.2025', color: 'geekblue' }
];

const MarqueeTags = () => {
  const { isMobile } = useViewPort();

  if (isMobile) {
    return (
      <div className={styles.tagWrapper}>
        {tags.map((tag) => (
          <Tag
            key={tag.text}
            className={styles.tag}
            color={tag.color}
          >
            {tag.text}
          </Tag>
        ))}
      </div>
    );
  };
  return (
    <div className={styles.marquee_container}>
      <div className={styles.marquee_track}>
        <div className={styles.tagWrapper}>
          {tags.map((tag) => (
            <Tag
              key={tag.text}
              className={styles.tag}
              color={tag.color}
            >
              {tag.text}
            </Tag>
          ))}
        </div>
        <div className={styles.tagWrapper}>
          {tags.map((tag) => (
            <Tag
              key={`${tag.text}-second`}
              className={styles.tag}
              color={tag.color}
            >
              {tag.text}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeTags;
