import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

import logo from '@/_assets/headerSection/backgroundLogo.svg';

import SummerFestHeader from '@/_sections/_summerFest-Header';
import SummerFestTickets from '@/_sections/_summerFest-Tickets';
import SummerFestInfo from '@/_sections/_summerFest-Info';
import EventDetails from '@/_sections/_summerFest_EventDetails';
import FooterSection from '@/_sections/footerSection';

import styles from './styles.module.sass';
import SummerFestSpeakers from '@/_sections/_summerFest-Speakers';
import SummerFestFormats from '@/_sections/_summerFest-Formats';
import SummerFestConfSchedule from '@/_sections/_summerFest-ConfSchedule';
import SummerFestSponsors from '@/_sections/_summerFest-Sponsors';
import SummerFestPhotos from '@/_sections/_summerFest-Photos';

export const metadata: Metadata = {
  title: 'IT SUMMER FEST 2025 | IT Connect Belgrade',
  description: 'IT Connect Belgrade',
};

export default function SummerFest() {
  return (
    <div className={styles.summerFestPage} id="summer-fest-page">
      <script
        src="https://widget.oblakkarte.rs/widget.js"
        async data-organizer-public-token="Iqi7CCFo"
      />
      <Image
        src={logo}
        width={50}
        height={51}
        alt="logo"
        className={styles.logo}
      />
      <SummerFestHeader />
      <SummerFestInfo />
      <SummerFestPhotos />

      <div id="tickets" />
      <SummerFestTickets />

      <SummerFestSpeakers />
      <SummerFestFormats />
      <SummerFestSponsors />
      <SummerFestConfSchedule />
      <EventDetails />
      <FooterSection />
    </div>
  );
};
