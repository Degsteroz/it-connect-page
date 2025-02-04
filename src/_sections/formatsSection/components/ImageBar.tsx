'use client';
import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { InView } from 'react-intersection-observer';

import { data } from '../data';

import styles from './styles.module.sass';

export default function ImageBar() {
  const [count, setCount] = useState<number>(34);

  const screenWidth = typeof window !== 'undefined'
    ? window.innerWidth
    : 1440;

  const startCount = (value: boolean) => {
    if (!value || count >= 60) return;
    const interval = setInterval(() => {
      if (count >= 60) clearInterval(interval);
      const step = Math.floor(Math.random() * 5) + 1;
      setCount(prev => (prev + step > 60 ? 60 : prev + step));
    }, 50);
  };

  const imageArray = data.map(item => item.photo);
  const imageWidth = Math.floor((screenWidth - 60) / 4);
  const imageHeight = imageWidth * 0.6;

  const backgroundImages = useMemo(() => {
    return imageArray.slice(0, 8).map(image => (
      <Image
        src={image}
        key={image}
        width={imageWidth}
        height={imageHeight}
        alt={image}
        className={styles.imageBar__image}
      />
    ));
  }, []);

  return (
    <div className={styles.imageBar}>
      {backgroundImages}
      <div className={styles.imageBar__statistic}>
        Every year we host more than {count} events!
      </div>
      <InView onChange={startCount}/>
    </div>
  );
}
