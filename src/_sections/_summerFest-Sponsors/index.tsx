import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.sass';

const sponsors: string[] = [
  '14e1d288-b7b7-46c4-9075-57ae55556fe6',
  '335d3562-76ec-4a70-87f5-32cc513e77b7'
];

const url = 'https://res.cloudinary.com/dtecpsig5/image/upload/c_scale,w_400/v1749768010/it-connect-parthners/';

export default function SummerFestSponsors() {
  return (
    <div className={styles.sponsorsPage}>
      <div className={styles.title}>
        OUR SPONSORS
      </div>

      <div className={styles.content}>
        <div className={styles.glyphColumn} />

        <div className={styles.sponsorCard}>
          <div className={styles.sponsorLogo}>
            <Image
              src={url + sponsors[0]}
              alt=""
              width={400}
              height={400}
              style={{
                width: 'auto',
                height: '160px',
              }}
            />
          </div>
          <div className={styles.chevronLine} />
        </div>

        <div className={styles.glyphColumn} />

        <div className={styles.sponsorCard}>
          <div className={styles.chevronLine} />
          <div className={styles.sponsorLogo}>
            <Image
              src={url + sponsors[1]}
              alt=""
              width={400}
              height={400}
              style={{
                width: '200px',
                height: 'auto',
              }}
            />
          </div>
        </div>

        <div className={styles.glyphColumn} />

        <Link
          className={styles.sponsorCard}
          href="mailto:itconnectsocialnetworks@gmail.com"
          target='_blank'
        >
          <div className={styles.sponsorTitle}>
            Want to join?
          </div>
          <div>Let&#39;s talk!</div>
          <div className={styles.chevronLine} />
        </Link>
        <div className={styles.glyphColumn} />
      </div>
    </div>
  );
}
