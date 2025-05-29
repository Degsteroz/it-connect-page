'use client';
import React from 'react';
import { Flex } from 'antd';
import Link from 'next/link';
import Image from 'next/image';

import { ArrowDownOutlined } from '@ant-design/icons';

import { useViewPort } from '@/_hooks';

import styles from './styles.module.sass';

const imageUrl = 'https://res.cloudinary.com/dtecpsig5/image/upload/v1748048678/it-connect/4_fohzMeE08ss7-VLzC44B_OY2pZWqCxkYfOlU8lrlRL29aTvObS58hiVlfLPlWczz5NrK9Q9fBbv9CUFtjpNQ_3D_3D_uyqyrp';

export default function SummerFestHeader() {
  const { isMobile } = useViewPort();
  return (
    <div className={styles.summerFestHeader}>
      <Image
        src={imageUrl}
        width={1280}
        height={768}
        alt=""
        style={{
          width: isMobile ? 'auto' : '100vw',
          height: isMobile ? '100vh' : 'auto'
        }}
        className={styles.backgroundImage}
      />
      <Flex
        align="center"
        justify='center'
        style={{
          height: '100%'
        }}
      >
        <div className={styles.summerFestHeaderTextBlock}>
          <h1 className={styles.title}>
            IT <span style={{ color: '#82ff08' }}>SUMMER</span> FEST
          </h1>

          <Flex
            className={styles.info}
            gap={20}
            vertical
          >
            <div>
              16 <span style={{ color: '#82ff08' }}>August,</span> Saturday, 12:00
            </div>
            <div>
              Dorćol Platz, <span style={{ color: '#82ff08' }}>Belgrade,</span> Dobračina 59
            </div>
          </Flex>
        </div>

        <Link href="#tickets" className={styles.callToAction}>
          <Flex gap={20}>
            <ArrowDownOutlined />
            BUY TICKETS NOW
            <ArrowDownOutlined />
          </Flex>
        </Link>
      </Flex>
    </div>
  );
};
