import React from 'react';
import { Card } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import telegramIcon from '@/_assets/telegramIcon.svg';
import linkedinIcon from '@/_assets/linkedinIcon.svg';
import instagramIcon from '@/_assets/instagramIcon.svg';

import { Member } from '../../data';

import styles from './styles.module.sass';

interface MemberCardProps {
  data: Member;
  index: number;
}

const icons: Record<string, StaticImport> = {
  telegram: telegramIcon,
  linkedin: linkedinIcon,
  instagram: instagramIcon,
};

const getLink = (key: 'telegram' | 'instagram' | 'linkedin', value: string) => {
  const links = {
    telegram: 'https://t.me/',
    linkedin: 'https://www.linkedin.com/in/',
    instagram: 'https://www.instagram.com/'
  };

  if (!links[key]) return '';

  return links[key] + value;
};

const getImageUrl = (id: string) => {
  const BASE_URL = 'https://res.cloudinary.com/dtecpsig5/image/upload/c_scale,q_auto:eco,w_1024/v1743973052/it-connect/';

  return BASE_URL + id;
};

export default function MemberCard({ data, index }: MemberCardProps) {
  const rectangleClassName = `${styles.rectangle} ${(index + 1) % 2 ? '' : styles.dark}`;

  const getContactComponent = () => {
    if (!data.contacts) return null;

    return Object.entries(data.contacts).map(([key, value]) => {
      const icon =  icons[key];
      const link = getLink(key as 'telegram' | 'instagram' | 'linkedin', value);

      return (
        <Link
          href={link}
          key={key + '__' + value}
          className={styles.contactIcon}
          target="_blank"
        >
          <Image
            src={icon}
            alt={data.name + ' ' + key}
            width={25}
            height={25}
          />
        </Link>
      );
    });
  };

  return (
    <Card
      style={{ position: 'relative' }}
      styles={{
        body: {
          padding: 0
        }
      }}
    >
      <div className={styles.card}>
        <div className={styles.photoWrapper}>
          <Image
            src={getImageUrl(data.photo)}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt={data.name}
            draggable={false}
          />
        </div>
        <div className={rectangleClassName}>
          <Image
            src={getImageUrl(data.avatar)}
            alt=""
            width={300}
            height={300}
            draggable={false}
            className={styles.avatar}
          />
        </div>

        <div className={styles.avatarWrapper}>
          <Image
            src={getImageUrl(data.avatarHovered)}
            alt=""
            width={300}
            height={300}
            draggable={false}
            className={styles.avatarHovered}
          />
        </div>

        <div className={styles.textBlock}>
          <div className={styles.name}>
            {data.name}
          </div>
          <div className={styles.role}>
            {data.role}
          </div>
          <div className={styles.description}>
            {data.description}
          </div>

          <div className={styles.contacts}>
            {getContactComponent()}
          </div>
        </div>
      </div>
    </Card>
  );
}
