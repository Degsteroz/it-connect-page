'use client';
import React, { useState } from 'react';
import { Card, Modal } from 'antd';
import Image from 'next/image';

import { data } from './data';
import EventTypeCard from './components/EventTypeCard';

import styles from './styles.module.sass';

export default function FormatSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const formatsComponents = data.map((format, index) => {
    return (
      <Card
        bordered={false}
        key={format.title}
        className={styles.formatCard}
        hoverable
        onClick={() => setActiveIndex(index)}
      >
        <Image
          src={format.photo}
          alt=""
          width={368}
          height={246}
          className={styles.image}
        />
        <div className={styles.cardTextBlock}>
          <h4 className={styles.cardTitle}>
            {format.title}
          </h4>
          <div className={styles.cardDescription}>
            {format.shortDescription}
          </div>
        </div>

      </Card>
    );
  });

  return (
    <section className={styles.formatsSection}>
      {formatsComponents}

      <Modal
        open={activeIndex !== null}
        onCancel={() => setActiveIndex(null)}
        width={'fit-content'}
        footer={false}
        className={styles.modal}
        destroyOnClose
      >
        <EventTypeCard eventType={data[activeIndex || 0]} />
      </Modal>
    </section>
  );
};
