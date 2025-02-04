'use client';
import React from 'react';
import Image from 'next/image';
import { Flex } from 'antd';
import Link from 'next/link';

import styles from './styles.module.sass';
import logo from '@/_assets/logo.svg';

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
    title: 'Formats',
    id: 'formats',
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
    title: 'Partners',
    id: 'partners',
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
            src={logo}
            alt="Logo"
            width={200}
            height={30}
          />
        </Flex>
        <Flex gap={40}>{navigationButtons}</Flex>
        <Flex align="center" gap={10}>
          {contactCards}
        </Flex>
      </Flex>
    </nav>
  );
}
