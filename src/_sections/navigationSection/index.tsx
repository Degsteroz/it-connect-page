import React from 'react';
import Image from 'next/image';
import { Flex } from 'antd';
import Link from 'next/link';

import styles from './styles.module.sass';

import { imagePrefix } from '@/_consts';

export default function NavigationSection() {
  const navigationLinks = [
    {
      title: 'Home',
      href: '/#home',
    },
    {
      title: 'About',
      href: '/#about',
    },
    {
      title: 'Contacts',
      href: '/#contacts',
    },
    {
      title: 'Preferences',
      href: '/#preferences',
    }
  ];

  const navigationButtons = navigationLinks.map((link) => (
    <Link
      key={link.title}
      href={link.href}
      className={styles.navigationLink}
    >
      {link.title}
    </Link>
  ));

  const iconUrl = imagePrefix + 'logo_ITCONNECT_btvs83.webp';

  return (
    <nav className={styles.navigationSection}>
      <Flex align="center" gap={140}>
        <Flex align="center" gap={10}>
          <Image
            src={iconUrl}
            alt="Logo"
            width={40}
            height={40}
          />
          <div>IT CONNECT</div>
        </Flex>
        <Flex gap={100}>{navigationButtons}</Flex>
      </Flex>
    </nav>
  );
}
