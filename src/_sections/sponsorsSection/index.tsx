import React from 'react';

import { sponsorsSectionData } from './data';

import SponsorshipCardComponent from './components/sponsorshipCardComponent';

import styles from './styles.module.sass';

export default function SponsorsSection() {
  const cards = sponsorsSectionData.map(card => (
    <SponsorshipCardComponent sponsorshipCard={card} key={card.title}/>
  ));
  return (
    <section className={styles.sponsorshipSection}>
      <h3 className={styles.sponsorshipSection_title}>
        Sponsorship proposal
      </h3>
      <div className={styles.cardWrapper}>
        {cards}
      </div>
    </section>
  );
}
