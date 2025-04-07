'use client';
import React from 'react';
import Link from 'next/link';
import { Card } from 'antd';

import useStore from '@/_store';

import { getImageUrl } from '@/_utils';

import ClosestEventPreview from './_components/ClosestEventPreview';
import EventsTable from './_components/EventsTable';

import styles from './_styles/styles.module.sass';

export default function BackOffice() {
  const { closestEvent } = useStore(store => store);

  const content = [
    {
      title: 'Closest Event',
      path: '/back-office/closestEvent',
      component: ClosestEventPreview({
        data: closestEvent
          ? { ...closestEvent, image: getImageUrl(closestEvent?.image || '') }
          : null }),
    },
    {
      title: 'Events Table',
      path: '/back-office/events',
      component: EventsTable(),
    }
  ].map((item) => (
    <Card
      key={item.title}
      title={item.title}
      style={{
        flex: '1 1 auto',
        height: 'fit-content',
      }}
      actions={[
        <Link href={item.path} key={item.path}>
          Edit
        </Link>
      ]}
    >
      {item.component}
    </Card>
  ));

  return (
    <div className={styles.dashboard}>
      {content}
    </div>
  );
}
