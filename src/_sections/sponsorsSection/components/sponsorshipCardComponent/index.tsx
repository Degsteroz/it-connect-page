import React from 'react';
import Image from 'next/image';

import Decorate1 from '@/_assets/sponsorsSection/decorate1.png';
import Decorate2 from '@/_assets/sponsorsSection/decorate2.png';

import styles from './styles.module.sass';

export interface SponsorCardProps {
  title: string;
  description: string;
  preferences: string[];
  price: string;
  highlighted?: boolean;
  decorateImage: 1 | 2;
  link?: string;
}

const images = {
  1: Decorate1,
  2: Decorate2,
};

export default function SponsorshipCardComponent({
  sponsorshipCard,
}: {
  sponsorshipCard: SponsorCardProps;
}) {
  const { title, description, preferences, price, highlighted, decorateImage, link } = sponsorshipCard;
  const getLinkContent = () => {
    const buttonClassName = `${styles.button} ${highlighted ? styles.highlighted : ''}`;
    const buttonLink = highlighted ? 'mailto:itconnectsocialnetworks@gmail.com' : link;
    return (
      <a
        href={buttonLink}
        target="_blank"
        className={buttonClassName}
        rel="noreferrer"
      >
        I’m in
      </a>
    );
  };

  return (
    <div className={`${styles.card} ${highlighted ? styles.highlighted : ''}`}>
      <div className={`${styles.imageWrapper} ${highlighted ? '' : styles.glow}`}>
        <Image
          src={images[decorateImage]}
          alt={`${title} header visual`}
          width={200}
          className={styles.headerImage}
        />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.list}>
        {preferences.map((item) => (
          <li key={item} className={styles.listItem}>
            {item}
          </li>
        ))}
      </ul>
      <p className={styles.price}>{price}</p>
      {getLinkContent()}
    </div>
  );
}
