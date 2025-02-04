import React from 'react';

import HeaderSection from '@/_sections/headerSection';
import NavigationSection from '@/_sections/navigationSection';
import AboutSection from '@/_sections/aboutSection';
import ContactSection from '@/_sections/contactsSection';
import PreferenceSections from '@/_sections/preferenceSections';
import EventsSection from '@/_sections/eventsSection';
import AchievementsSection from '@/_sections/achievementsSection';
import TeamSection from '@/_sections/teamSection';
import FooterSection from '@/_sections/footerSection';

import styles from './page.module.css';
import FormatsSection from '@/_sections/formatsSection';
import PartnersSection from '@/_sections/partnersSection';

export default function Home() {
  return (
    <div
      className={styles.page}
      id="homePage"
    >
      <div id="home"/>
      <HeaderSection/>
      <NavigationSection/>

      <main>
        <div id="about"/>
        <AboutSection/>
        <div id="contacts"/>
        <ContactSection/>
        <div id="preferences"/>
        <PreferenceSections/>
        <div id="formats"/>
        <FormatsSection/>
        <div id="events"/>
        <EventsSection/>
        <div id="achievements"/>
        <AchievementsSection/>
        <div id="partners"/>
        <PartnersSection/>
        <div id="team"/>
        <TeamSection/>
      </main>

      <FooterSection/>
    </div>
  );
}
