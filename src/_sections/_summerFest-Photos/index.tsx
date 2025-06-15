'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { InView } from 'react-intersection-observer';

import { useViewPort } from '@/_hooks';

import styles from './styles.module.sass';

const PHOTOS = [
  'summerFestPhotos/2025-06-09_20-24-18_39_ephcdj',
  'summerFestPhotos/2025-06-09_20-24-18_38_dl2lbg',
  'summerFestPhotos/2025-06-09_20-24-18_36_aokch8',
  'summerFestPhotos/2025-06-09_20-24-18_35_b6d5vn',
  'summerFestPhotos/2025-06-09_20-24-18_17_poumoi',
  'summerFestPhotos/2025-06-09_20-24-18_13_nldvgu',
  'summerFestPhotos/2025-06-09_20-24-18_12_kamnzd',
  'summerFestPhotos/2025-06-09_20-24-18_28_ewjq7s',
  'summerFestPhotos/2025-06-09_20-24-18_23_arhx0z',
  'summerFestPhotos/2025-06-09_20-24-18_10_zjd9tu'
];

let initialScrollPos: number | null = null;

const url = 'https://res.cloudinary.com/dtecpsig5/image/upload/v1749756498/';

export default function SummerFestPhotos() {
  const { isMobile } = useViewPort();

  const [visible, setVisible] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile) return;
    if (!containerRef.current || !pageRef.current || typeof window === 'undefined')  return;

    pageRef.current.style.height = containerRef.current.scrollWidth - (window.innerWidth / 2) + 'px';
  }, [containerRef, pageRef, isMobile]);

  useEffect(() => {
    if (!visible || isMobile) return;

    const container = document.getElementById('summer-fest-page');
    if (!container) return;

    if (!initialScrollPos) {
      initialScrollPos = container.scrollTop;
    }

    function handleScroll() {
      if (!container || !containerRef.current) return;
      containerRef.current.scrollLeft = container.scrollTop - (initialScrollPos as number);
    }

    container.addEventListener('scroll', handleScroll);

    return () => container.removeEventListener('scroll', handleScroll);
  }, [visible]);

  if (isMobile) {
    return (
      <div className={styles.photosPage}>
        <div className={styles.photos}>
          <div className={`${styles.inviteCard} ${styles.first}`}>
            <div className={styles.cardTitle}>
              CHECK OUR PHOTOS
            </div>
          </div>
          {PHOTOS.map((photo) => (
            <Image
              src={url + photo}
              alt=""
              width={1320}
              height={880}
              key={photo}
              className={styles.photo}
            />
          ))}
          <div className={styles.inviteCard}>
            <div className={styles.cardTitle}>
              WANNA BE PART OF IT<span className={styles.sign}>?</span>
            </div>
            <div className={styles.cardSubtitle}>
              We are waiting for you!
            </div>
            <div className={styles.signalGraph} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={styles.photosPage}
      ref={pageRef}
    >
      <div style={{
        height: '100%',
        position: 'relative'
      }}>
        <div className={styles.photosWrapper}>
          <div
            style={{
              width: '100vw',
              overflow: 'hidden',
            }}
            ref={containerRef}
          >
            <div className={styles.photos}>
              {PHOTOS.map((photo) => (
                <Image
                  src={url + photo}
                  alt=""
                  width={1320}
                  height={880}
                  key={photo}
                  className={styles.photo}
                />
              ))}
              <div className={styles.inviteCard}>
                <div className={styles.cardTitle}>
                  WANNA BE PART OF IT<span className={styles.sign}>?</span>
                </div>
                <div className={styles.cardSubtitle}>
                  We are waiting for you!
                </div>
                <div className={styles.signalGraph} />
              </div>
            </div>
          </div>
          <InView
            onChange={(value) => {
              setVisible(value);
            }}
          />
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}
