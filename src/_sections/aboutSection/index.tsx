'use client';
import React, { useState } from 'react';
import { Carousel, Flex } from 'antd';
import Image from 'next/image';
import { InView } from 'react-intersection-observer';

import { imagePrefix } from '@/_consts';

import styles from './styles.module.sass';

export default function AboutSection() {
  const [visible, setVisible] = useState(false);
  const logoImageUrl ='itConnectLogoLarge';
  const imageUrls = [
    'aboutImage1.jpg',
    'aboutImage2.jpg',
    'aboutImage3.jpg'
  ];

  const descriptionsList = [
    'Offline Meet Ups',
    'Networking session',
    'IT lunches',
    'Workshops',
    'Open Airs',
  ];

  const descriptions = descriptionsList.map((item) => (
    <div
      key={item}
      className={styles.description__item}
    >
      {`- ${item}`}
    </div>
  ));

  const images = imageUrls.map((imageUrl, index) => (
    <div
      className={styles.aboutSection__imageWrapper}
      key={imageUrl}
    >
      <Image
        src={imagePrefix + imageUrl}
        alt={`about image ${index}`}
        width={640}
        height={425}
      />
    </div>
  ));

  const contentBlockClassName = `${styles.aboutSection__contentBlock} ${visible ? styles.visible : ''}`;

  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.aboutSection_title}>
        ABOUT US
      </h2>

      <Flex className={contentBlockClassName}>
        <Carousel
          effect="fade"
          autoplay
          adaptiveHeight
          autoplaySpeed={7000}
          dots
          style={{
            width: '640px',
            flex: '1 1 640px',
          }}
        >
          {images}
        </Carousel>

        <Flex className={styles.contentBlock__description}>
          <h3 className={styles.description__title}>
            IT CONNECT
          </h3>
          <h4 className={styles.description__subtitle}>
            IT community in Belgrade
          </h4>
          <div className={styles.description__text}>
            We bring together individuals who are eager to share their
            IT knowledge with others and extend their network of connections.
          </div>
          <div className={styles.description__text}>
            We host informative:
          </div>
          <div className={styles.description__listWrapper}>
            {descriptions}
          </div>

          <Image
            src={imagePrefix + logoImageUrl}
            alt="It connect logo"
            width={300}
            height={300}
            className={styles.contentBlock__logo}
          />
        </Flex>
      </Flex>
      <InView onChange={setVisible} className={styles.anchor}/>
    </section>
  );
}
