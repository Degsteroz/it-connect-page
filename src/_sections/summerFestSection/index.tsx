import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.sass';

const imageId = 'https://res.cloudinary.com/dtecpsig5/image/upload/v1746700695/2025-05-08_12.37.35_zyuhs3.jpg';
const ticketLink = 'https://tic.rs/en/belgrade/events/parties-19/it-summer-fest-1369';

export default function SummerFestSection() {
  return (
    <div className={styles.summerFestSection}>
      <div className={styles.title}>
        IT SUMMER FEST 2025
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src={imageId}
          alt={''}
          fill
          className={styles.image}
        />

        <Link
          href={ticketLink}
          className={styles.clickArea}
          target="_blank"
        />
      </div>
    </div>
  );
};
