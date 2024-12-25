'use client';
import React, { useEffect, useState } from 'react';
import { Card, Flex } from 'antd';
import Image from 'next/image';
import { InView } from 'react-intersection-observer';

import styles from './styles.module.sass';

import { imagePrefix } from '@/_consts';

const preferences = [
  {
    title: 'Expertise Sharing',
    description: 'We offer every speaker in our community a platform to share their knowledge and insights through presentations and participation in our meetups.',
    image: 'preference1'
  },
  {
    title: 'Networking',
    description: 'Our networking sessions provide the perfect opportunity to establish valuable professional connections, fostering new introductions and collaborations.',
    image: 'preference2'
  },
  {
    title: 'Adaptation',
    description: 'Our events are a unique chance to discover exciting opportunities, engage in IT discussions, and explore new capabilities, all while enjoying IT lunches and much more!',
    image: 'preference3'
  },
];

export default function PreferenceSections() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log(visible);
    if (!visible) return;
    const cards = Array.from(document.getElementsByClassName(styles.content__card));
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.classList.add(styles.visible);
      }, i * 200);
    });
  }, [visible]);

  const handleChangeVisibleState = (value: boolean) => {
    if (visible || !value) return;

    setVisible(true);
  };

  const preferencesCards = preferences.map((p) => (
    <div
      className={styles.content__card}
      key={p.title}
    >
      <div className={styles.content__cardDescriptionBlock}>
        <div className={styles.title}>
          {p.title}
        </div>
        <div className={styles.description}>
          {p.description}
        </div>
      </div>

      <div className={styles.content__cardImageWrapper}>
        <Image
          src={imagePrefix + p.image}
          alt="preference"
          fill
          className={styles.content__cardImage}
        />
      </div>
    </div>
  ));

  return (
    <section className={styles.preferenceSection}>
      <Card className={styles.preferenceSectionContent}>
        <h2 className={styles.preferenceSectionContent__title}>
          PREFERENCES
        </h2>
        <h3 className={styles.preferenceSectionContent__subtitle}>
          Why Should You Attend Our Meetups?
        </h3>
        <InView
          onChange={handleChangeVisibleState}
          className={styles.anchor}
        />
        <Flex justify="space-between" className={styles.content__cards}>
          {preferencesCards}
        </Flex>
      </Card>
    </section>
  );
}
