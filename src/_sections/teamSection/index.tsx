import React from 'react';
import Image from 'next/image';

import styles from './styles.module.sass';

export default function TeamSection() {
  const imageSrc = 'https://it-conect.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fba98bd55-74f8-46aa-a976-7248c0b8b835%2F93f75e33-6bff-435a-9e8e-947bc3342d19%2Fteam.png?table=block&id=060c00f4-2b66-467d-a8de-146f90ff2701&spaceId=ba98bd55-74f8-46aa-a976-7248c0b8b835&width=2000&userId=&cache=v2';

  return (
    <section className={styles.teamSection}>
      <h2 className={styles.teamSection__title}>
        Our team
      </h2>
      <Image
        src={imageSrc}
        width={1214}
        height={683}
        alt={''}
        className={styles.content__image}
      />
    </section>
  );
};
