import React from 'react';
import Link from 'next/link';
import { MenuOutlined } from '@ant-design/icons';

import styles from './styles.module.sass';

const routes = [
  {
    path: '/',
    title: 'Main',
  },
  {
    path: '/closestEvent',
    title: 'Closest Event',
  },
  {
    path: '/events',
    title: 'Events',
  },
  {
    path: 'events/create',
    title: 'Create Event',
  }
];

export default function NavigationComponent() {
  const links = routes.map(route => (
    <Link
      className={styles.navigationLink}
      href={'/back-office' + route.path}
      key={route.path}
    >
      {route.title}
    </Link>
  ));
  return (
    <section className={styles.navigationComponent}>
      <MenuOutlined className={styles.icon} />
      <div className={styles.linksContainer}>
        {links}
      </div>
    </section>
  );
}
