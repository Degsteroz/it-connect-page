'use client';
import React, { useMemo, useState } from 'react';

import { data } from './data';
import EventTypeCard from './components/EventTypeCard';

import styles from './styles.module.sass';
import ImageBar from '@/_sections/formatsSection/components/ImageBar';

export default function FormatSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const imageBlock = useMemo(() => <ImageBar />, []);

  const tabsButtons = useMemo(() => {
    return data.map((item, index) => {
      const buttonClassName = `${styles.tabButton} ${activeIndex === index ? styles['--active'] : ''}`;
      return (
        <div
          key={item.title}
          onClick={() => setActiveIndex(index)}
          className={buttonClassName}
        >
          {item.title}
        </div>
      );
    });
  }, [data, activeIndex]);

  return (
    <section className={styles.formatsSection}>
      <h1 className={styles.formatsSection__header}>
        OUR FORMATS
      </h1>

      <div className={styles.tabComponent}>
        {tabsButtons}
      </div>

      <EventTypeCard eventType={data[activeIndex]} />
      {imageBlock}
    </section>
  );
};
