import React from 'react';
import Image from 'next/image';

import styles from './styles.module.sass';

const BASE_URL = 'https://res.cloudinary.com/dtecpsig5/image/upload/v1738704171/it-connect-parthners/';

const logos = [
  { id: 'kzrt6aklsqohtzgv0cyi', src: 'kzrt6aklsqohtzgv0cyi.svg' },
  { id: 'mercury_ulhapd', src: 'mercury_ulhapd.png' },
  { id: 'dvaMedveda_nuyzvw', src: 'dvaMedveda_nuyzvw.png' },
  { id: 'iaej0xnmmhwcemqaepy2', src: 'iaej0xnmmhwcemqaepy2.svg' },
  { id: 'Blize_rv6rbu', src: 'Blize_rv6rbu.png' },
  { id: 'peredelano_raqnst', src: 'peredelano_raqnst.png' },
  { id: 'fgqhgssduergkjh3nrof', src: 'fgqhgssduergkjh3nrof.svg' },
  { id: 'opyatEti_gqipkx', src: 'opyatEti_gqipkx.png' },
  { id: 'm9ak51effaiqbgalodsz', src: 'm9ak51effaiqbgalodsz.svg' },
  { id: 'ciderrs_q24v8s', src: 'ciderrs_q24v8s.png' },
];

const logosDoubled = [...logos, ...logos.map(item => ({
  ...item,
  id: item.id + 'second'
}))];

const images = logosDoubled.map((logo) => (
  <div
    key={logo.id}
    className={styles.imageWrapper}
  >
    <Image
      className={styles.logo}
      src={BASE_URL + logo.src}
      alt={`Partner ${logo.id}`}
      fill
      style={{ objectFit: 'contain' }}
    />
  </div>
));

export default function PartnersSection() {
  return (
    <section className={styles.partnersSection}>
      <h2 className={styles.title}>PARTNERS</h2>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {images}
        </div>
      </div>
    </section>
  );
};
