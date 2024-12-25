import React from 'react';
import HeaderSection from '@/_sections/headerSection';

import styles from './page.module.css';
import NavigationSection from '@/_sections/navigationSection';
import AboutSection from '@/_sections/_aboutSection';

export default function Home() {
  return (
    <div className={styles.page} id="homePage">
      <header>
        <HeaderSection />
      </header>

      <NavigationSection />
      <main className={styles.main}>
        <div id="about" />
        <AboutSection />
      </main>
    </div>
  );
}
