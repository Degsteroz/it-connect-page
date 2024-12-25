'use client';

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.sass';

export default function HeaderSection() {
  const titleComponentRef = useRef<HTMLDivElement | null>(null);
  const descriptionComponentRef = useRef<HTMLDivElement | null>(null);
  const descriptionText = 'IT Connect is a tech-focused community fostering collaboration and innovation. It unites professionals to share knowledge, build connections, and explore new opportunities in the IT sphere.';

  useEffect(() => {
    if (!titleComponentRef.current || !descriptionComponentRef.current) return;

    setTimeout(() => {
      if (!titleComponentRef.current) return;
      titleComponentRef.current.classList.add(styles.finalPosition);
    }, 3000);

    setTimeout(() => {
      if (!descriptionComponentRef.current) return;
      descriptionComponentRef.current.classList.add(styles.visible);
    }, 3500);

    const homePage = document.getElementById('homePage');

    if (!homePage) return;

    const changeHeaderStyles = () => {
      if (!titleComponentRef.current || !descriptionComponentRef.current) return;
      const transparentValue = homePage.scrollTop / 400;

      descriptionComponentRef.current.style.opacity = String(1 - transparentValue);
      descriptionComponentRef.current.style.transition = 'none';
      titleComponentRef.current.style.opacity = String(1 - transparentValue);
      titleComponentRef.current.style.transition = 'none';
    };

    setTimeout(() => {
      homePage.addEventListener('scroll', changeHeaderStyles);
    }, 3700);

    return () => homePage.removeEventListener('scroll', changeHeaderStyles);
  }, [titleComponentRef, descriptionComponentRef]);

  return (
    <section className={styles.headerSection}>
      <div
        className={styles.headerSection__titleComponent}
        ref={titleComponentRef}
      >
        <h1 className={styles.headerSection__title}>
          IT CONNECT
        </h1>
        <h2 className={styles.headerSection__subtitle}>
          IT community in Belgrade
        </h2>
      </div>
      <div className={styles.descriptionBlock} ref={descriptionComponentRef}>
        {descriptionText}
      </div>
    </section>

  );
}

