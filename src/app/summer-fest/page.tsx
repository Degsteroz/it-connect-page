import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Script from 'next/script';

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
      <Script
        id="yandex-metrika"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){ (m[i].a=m[i].a||[]).push(arguments) };
              m[i].l=1*new Date();
              k=e.createElement(t), a=e.getElementsByTagName(t)[0];
              k.async=1; k.src=r; a.parentNode.insertBefore(k,a)
            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(102652008, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `,
        }}
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
