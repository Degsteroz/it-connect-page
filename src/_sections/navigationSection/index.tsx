'use client';
import React from 'react';
import Image from 'next/image';
import { Flex } from 'antd';
import Link from 'next/link';

import styles from './styles.module.sass';

import { imagePrefix } from '@/_consts';

import { contactsArray } from '@/_sections/contactsSection';

type NavigationLinkType = {
  title: string;
  id: string;
}

const navigationLinks: NavigationLinkType[] = [
  {
    title: 'Home',
    id: 'home',
  },
  {
    title: 'About',
    id: 'about',
  },
  {
    title: 'Contacts',
    id: 'contacts',
  },
  {
    title: 'Preferences',
    id: 'preferences',
  },
  {
    title: 'Events',
    id: 'events',
  },
  {
    title: 'Achievements',
    id: 'achievements',
  },
  {
    title: 'Team',
    id: 'team',
  },
];

export default function NavigationSection() {
  const handleLinkClick = (link: NavigationLinkType) => {
    const anchor = document.getElementById(link.id);
    const homePage = document.getElementById('homePage');

    if (!anchor || !homePage) return;

    const top = anchor.offsetTop;

    homePage.scrollTo({ top: top - 50, behavior: 'smooth' });
  };

  const navigationButtons = navigationLinks.map((link) => (
    <div
      key={link.title}
      className={styles.navigationLink}
      onClick={() => handleLinkClick(link) }
    >
      {link.title}
    </div>
  ));

  const iconUrl = imagePrefix + 'logo_ITCONNECT_btvs83.webp';

  const contactCards = contactsArray
    .map((contact) => (
      <Link
        href={contact.url}
        target="_blank"
        key={contact.title}
      >
        {contact.icon}
      </Link>
    ));

  return (
    <nav className={styles.navigationSection}>
      <Flex align="center" justify="space-between">
        <Flex align="center" gap={10}>
          <Image
            src={iconUrl}
            alt="Logo"
            width={40}
            height={40}
          />
          <div>IT CONNECT</div>
        </Flex>
        <Flex gap={40}>{navigationButtons}</Flex>
        <Flex align="center" gap={10}>
          {contactCards}
        </Flex>
      </Flex>
    </nav>
  );
}
