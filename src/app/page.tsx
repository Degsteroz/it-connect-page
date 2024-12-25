import React from 'react';
import HeaderSection from '@/_sections/headerSection';

import styles from './page.module.css';

import NavigationSection from '@/_sections/navigationSection';
import AboutSection from '../_sections/aboutSection';
import ContactSection from '@/_sections/contactsSection';
import PreferenceSections from '@/_sections/preferenceSections';

export default function Home() {
  return (
    <div className={styles.page} id="homePage">
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
      </main>
    </div>
  );
}
