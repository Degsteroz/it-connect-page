'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.sass';

const POSTER_URL =
  'https://res.cloudinary.com/dtecpsig5/image/upload/v1782930662/2026-07-01_20.29.28_nrjgxs.jpg';

const TICKETS_URL = 'http://taplink.cc/standupfest2026';
const MAPS_URL = 'https://maps.app.goo.gl/S1AQZagYnWbSZYHb8';
const TELEGRAM_URL = 'https://t.me/standup_beo';

const inFuture = (date: Date) => {
  return date.setHours(0,0,0,0) > new Date().setHours(0,0,0,0);
};

export default function StandupFestSection() {
  if (!inFuture(new Date('07/07/2026'))) return null;

  return (
    <section className={styles.standupFestSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.posterWrapper}>
          <Image
            src={POSTER_URL}
            alt="Stand-Up Fest Vol. 3 — July 4–5, Belgrade"
            width={560}
            height={560}
            className={styles.poster}
            priority
          />
        </div>

        <div className={styles.textContent}>
          <div className={styles.titleBlock}>
            <h2 className={styles.title}>Stand-Up Fest in Belgrade</h2>
            <div className={styles.dates}>July 4–5</div>
          </div>

          <p className={styles.lead}>
            Two days of non-stop laughs from stand-up comedians! The{' '}
            <strong>Opyat Eti</strong> community celebrates its 4th birthday
            with Stand-up Fest Vol. 3:
          </p>

          <ul className={styles.highlights}>
            <li>Two big stand-up concerts with an awesome lineup</li>
            <li>
              Crowdwork and improv in Committee, Razgoon, and Crappy
              Presentations shows
            </li>
            <li>
              Ariana Lolaeva, Ruslan Mukhtarov, Tanya Shchukina, Artem Andreev,
              Kirill Kuritsyn, Artem Zudin, Gleb Idov, Gosha Matyushin, Viktor
              Gorsky-Mochalov, Vlad Tsaturyan, Matvey Polyakov, Egor
              Alexandrov, and many more great stand-up comedians
            </li>
          </ul>

          <p className={styles.cta}>Come have fun! See you at the fest!</p>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaIcon}>🗓</span>
              <span>Sat–Sun, July 4 &amp; 5</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaIcon}>🚏</span>
              <Link href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                Polet, Cetinjska 15
              </Link>
            </div>
          </div>

          <p className={styles.footer}>
            <Link href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
              Opyat Eti — we do stand-up in Serbia
            </Link>
          </p>

          <Link
            href={TICKETS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Get tickets
          </Link>
        </div>
      </div>
    </section>
  );
}
