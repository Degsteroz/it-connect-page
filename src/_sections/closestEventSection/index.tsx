'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Skeleton, Tag } from 'antd';
import dayjs from 'dayjs';
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import Link from 'next/link';

import { doc, getDoc } from 'firebase/firestore';

import { eventsCollection } from '@/_fireBase';
import { IClosestEvent } from '@/_interfaces';

import background from '@/_assets/closestEventSection/background.png';
import telegramIcon from '@/_assets/telegramIcon.svg';
import linkedinIcon from '@/_assets/linkedinIcon.svg';
import meetupIcon from '@/_assets/meetupIcon.svg';

import styles from './styles.module.sass';

import { getImageUrl } from '@/_utils';

const icons = {
  linkedin: linkedinIcon,
  telegram: telegramIcon,
  meetup: meetupIcon,
};

export default function ClosestEventSection() {
  const [closestEvent, setClosestEvent] = useState<IClosestEvent | null>(null);

  useEffect(() => {
    const eventsRef = doc(eventsCollection, 'closestEvent');
    getDoc(eventsRef)
      .then(res => {
        const data = res?.data() as IClosestEvent;
        setClosestEvent(data);
      });
  }, []);

  if (!closestEvent) {
    return (
      <div style={{ margin: '0 auto' }}>
        <Skeleton.Node
          active
          style={{
            width: '1312px',
            height: '429px',
            borderRadius: '40px',
            backgroundColor: '#7030A0B2',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Image
            src={background}
            alt="background image"
            className={styles.image}
            width={1321}
          />
        </Skeleton.Node>
      </div>
    );
  }

  const tags = closestEvent.tags.map(tag => (
    <Tag
      key={tag}
      style={{
        backgroundColor: '#FFFEFE80',
        borderRadius: '50px',
        padding: '8px 16px',
        fontSize: '14px',
        fontWeight: '400',
        color: '#3F195B'
      }}
      bordered={false}
    >
      {tag}
    </Tag>
  ));

  const links = ['linkedin', 'meetup', 'telegram']
    .filter(item => closestEvent[item as keyof typeof closestEvent] && closestEvent[item as keyof typeof closestEvent] !== '')
    .map(item => (
      <Link href={closestEvent[item as keyof typeof closestEvent] as string} key={item} className={styles.icon}>
        <Image
          src={icons[item as keyof typeof icons]}
          alt={item}
          width={48}
          height={48}
        />
      </Link>
    ));

  const currentDate = dayjs(closestEvent.date);

  return (
    <section className={styles.closestEventSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.firstRow}>
          <div className={styles.location}>
            <div>{dayjs(closestEvent.date).format('DD MMM YYYY')}</div>
            <div>{closestEvent.location}</div>
          </div>

          <div className={styles.tags}>
            {tags}
          </div>
        </div>

        <div className={styles.secondRow}>
          <div className={styles.leftSide}>
            <Image
              src={getImageUrl(closestEvent.image)}
              alt=""
              width={150}
              height={150}
              style={{ borderRadius: '50%' }}
            />

            <div className={styles.textBlock}>
              <div className={styles.title}>
                {closestEvent.title}
              </div>

              <div className={styles.description}>
                {closestEvent.description}
              </div>
            </div>

            <div className={styles.icons}>
              {links}
            </div>
          </div>

          <div className={styles.rightSide}>
            <Link
              href={closestEvent.registrationLink}
              className={styles.button}
            >
              Sign in
            </Link>

            <div className={styles.calendarWrapper}>
              <AddToCalendarButton
                name={closestEvent.title}
                startDate={currentDate.format('YYYY-MM-DD')}
                options={['Apple','Google']}
                timeZone="Europe/Belgrade"
                startTime={currentDate.format('HH:mm')}
                endTime={currentDate.add(2, 'hour').format('HH:mm')}
                hideBranding
                location={closestEvent.location}
                buttonStyle="round"
                buttonsList
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src={background}
          alt="background image"
          className={styles.image}
          width={1321}
        />
      </div>
    </section>
  );
}
