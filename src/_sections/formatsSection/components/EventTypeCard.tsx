import React from 'react';
import Image from 'next/image';
import { Card } from 'antd';

import { EventData } from '../data';
import styles from './styles.module.sass';

export default function EventTypeCard({ eventType }: {eventType: EventData }) {
  const itemList = eventType.items.map(item => (
    <li key={item}>
      {item}
    </li>
  ));

  return (
    <Card>
      <div className={styles.eventTypeCard}>
        <div className={styles.body__textBlock}>
          <h2 className={styles.eventTypeCard__title}>
            {eventType.title}
          </h2>
          {eventType.description}
          <ul className={styles.itemsList}>
            {itemList}
          </ul>

          {eventType.footer && (
            <div>{eventType.footer}</div>
          )}
        </div>

        <div className={styles.image_wrapper}>
          <Image
            src={eventType.photo}
            layout="fill"
            alt={eventType.title}
          />
        </div>
      </div>
    </Card>
  );
};
