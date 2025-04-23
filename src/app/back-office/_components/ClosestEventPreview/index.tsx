import React from 'react';
import Image from 'next/image';
import { Tag } from 'antd';
import dayjs from 'dayjs';
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import Link from 'next/link';
import { IClosestEvent } from '@/_interfaces';

import background from '@/_assets/closestEventSection/background.png';
import telegramIcon from '@/_assets/telegramIcon.svg';
import linkedinIcon from '@/_assets/linkedinIcon.svg';
import meetupIcon from '@/_assets/meetupIcon.svg';

import styles from './styles.module.sass';

const icons = {
  linkedin: linkedinIcon,
  telegram: telegramIcon,
  meetup: meetupIcon,
};

export default function ClosestEventPreview({ data, preview }: {data: IClosestEvent | null, preview?: boolean}) {
  if (!data) return null;

  const tags = data.tags.map(tag => (
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
    .filter(item  => data?.[item as keyof typeof data] && data?.[item as keyof typeof data] !== '')
    .map(item => {
      return (
        <Link href={data[item as keyof typeof data] as string} key={item} className={styles.icon}>
          <Image
            src={icons[item as keyof typeof icons]}
            alt={item}
            width={48}
            height={48}
          />
        </Link>
      );
    });

  const currentDate = dayjs(data.date);

  return (
    <div className={styles.closestEventSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.firstRow}>
          <div className={styles.location}>
            <div>{dayjs(data.date).format('DD MMM YYYY')}</div>
            <div>{data.location}</div>
          </div>

          <div className={styles.tags}>
            {tags}
          </div>
        </div>

        <div className={styles.secondRow}>
          <div className={styles.leftSide}>
            <Image
              src={data.image}
              alt=""
              width={150}
              height={150}
              style={{ borderRadius: '50%' }}
            />

            <div className={styles.textBlock}>
              <div className={styles.title}>
                {data.title}
              </div>

              <div className={styles.description}>
                {data.description}
              </div>
            </div>

            <div className={styles.icons}>
              {links}
            </div>
          </div>

          <div className={styles.rightSide}>
            <Link
              href={data?.registrationLink || ''}
              className={styles.button}
            >
              Sign in
            </Link>

            {!preview && (
              <div className={styles.calendarWrapper}>
                <AddToCalendarButton
                  name={data.title}
                  startDate={currentDate.format('YYYY-MM-DD')}
                  options={['Apple','Google']}
                  timeZone="Europe/Belgrade"
                  startTime={currentDate.format('HH:mm')}
                  endTime={currentDate.add(2, 'hour').format('HH:mm')}
                  hideBranding
                  buttonStyle="round"
                  buttonsList
                />
              </div>
            )}
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
    </div>
  );
}
