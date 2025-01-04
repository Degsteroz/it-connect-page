'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Collapse, Flex, CollapseProps } from 'antd';
import Image from 'next/image';
import { InView } from 'react-intersection-observer';

import { imagePrefix } from '@/_consts';

import styles from './styles.module.sass';

const achievements = [
  {
    title: 'Growing IT Community',
    description: 'Our community has expanded to include over 2000 active members from diverse areas of IT expertise. This vibrant network connects professionals across various disciplines, fostering collaboration and innovation while encouraging meaningful interactions between tech enthusiasts and industry leaders.',
    image: 'achievements1',
  },
  {
    title: 'Innovative Event Formats',
    description: 'Our team has successfully hosted four offline meetups and workshops, offering engaging discussions and hands-on experiences. We’ve organized IT lunches, combining networking with exploring Belgrade’s unique culinary scene, and continuously experiment with fresh and dynamic event formats to captivate our audience.',
    image: 'achievements2'
  },
  {
    title: 'Collaboration and Support',
    description: 'We proudly supported the JTBF festival, attracting participants to specialized events like the Data Science sessions and the Product Connect IT Meetup. Our dedication to fostering partnerships remains strong, as we eagerly explore new opportunities for collaboration and community impact.',
    image: 'achievements3'
  },
];

export default function AchievementsSection() {
  const [currentIndex, setCurrentIndex] = useState<string>('0');
  const [inView, setInView] = useState<boolean>(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imageRef.current) return;

    imageRef.current.style.opacity = '1';
  }, [currentIndex]);

  const items: CollapseProps['items'] = achievements.map((p, index) => ({
    label: p.title,
    key: String(index),
    children: <div className={styles.description}>{p.description}</div>
  }));

  const handleChange = (value: string[]) => {
    if (!value?.length || value[0] === currentIndex) return;
    if (imageRef.current) {
      imageRef.current.style.opacity = '0';
    }
    setTimeout(() => {
      setCurrentIndex(value[0]);
    }, 300);
  };

  return (
    <section className={styles.achievementsSection}>
      <h2 className={styles.achievementsSectionContent__title}>
        Achievements
      </h2>
      <h3 className={styles.achievementsSectionContent__subtitle}>
        Key Highlights of What We’ve Achieve
      </h3>

      <InView
        onChange={setInView}
        className={styles.anchor}
      />

      <Flex
        gap={30}
        align={'flex-start'}
      >
        <Collapse
          defaultActiveKey={0}
          accordion
          ghost
          onChange={handleChange}
          items={items}
          size="large"
          style={{
            flex: '1 0 60%',
            height: 'fit-content'
          }}
        />

        <Image
          src={imagePrefix + achievements[Number(currentIndex) || 0].image}
          alt="preference"
          width={450}
          height={450}
          ref={imageRef}
          style={{
            borderRadius:  '10px',
            opacity: inView ? 1 : 0.4,
            transition: 'all 0.3s ease',
            transform: `scale(${inView ? 1 : 0.4})`,
          }}
        />
      </Flex>
    </section>
  );
}
