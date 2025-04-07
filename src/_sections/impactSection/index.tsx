'use client';
import React from 'react';
import { InView } from 'react-intersection-observer';

import styles from './styles.module.sass';

export default function ImpactSection() {
  const stats = [
    {
      title: 'community members',
      count: 4000,
      divider: 1000,
    },
    {
      title: 'event per year',
      count: 60,
      divider: 3,
    },
    {
      title: 'meetups per year',
      count: 15,
      divider: 3,
    },
    {
      title: 'lunches per year',
      count: 20,
      divider: 2,
    },
  ];

  const statsComponents = stats.map((item) => {
    const counters = Array.from(
      { length: item.count / item.divider },
      (_, i) => (
        <div className={styles.counter} key={`${item.count}_${i}`}>
          {item.divider * (i + 1)}
        </div>
      ));

    return (
      <div
        key={item.title}
        className={styles.statComponent}
      >
        <div className={styles.counterComponent}>
          <div className={styles.countersWrapper}>
            {counters}
          </div>
        </div>
        <div className={styles.text}>
          {item.title}
        </div>
      </div>
    );
  });

  const startCounters = (visible: boolean) => {
    if (!visible) return;

    Array.from(document.getElementsByClassName(styles.countersWrapper))
      .forEach((component) => {
        const { height } = component.getBoundingClientRect();
        // @ts-expect-error style
        component.style.top = -(height - 63) + 'px';
      });
  };

  return (
    <section className={styles.impactSection}>
      <div className={styles.content}>
        <div className={styles.titleBlock}>
          <div className={styles.title}>
            Impact in numbers
          </div>
          <div className={styles.subtitle}>
            The milestones we have built together
          </div>
        </div>

        <InView onChange={startCounters}/>
        <div className={styles.statsTitle}>
          We have more than
        </div>
        <div className={styles.statsWrapper}>
          {statsComponents}
        </div>
      </div>
    </section>
  );
}
