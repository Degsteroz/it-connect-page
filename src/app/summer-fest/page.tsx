'use client';
import React from 'react';
import { Layout } from 'antd';
import Image from 'next/image';

import { useViewPort } from '@/_hooks';

import SummerFestHeader from '@/_sections/_summerFest-Header';

import styles from './styles.module.sass';
import logo from '@/_assets/headerSection/backgroundLogo.svg';

const imageUrl = 'https://res.cloudinary.com/dtecpsig5/image/upload/v1748048678/it-connect/4_fohzMeE08ss7-VLzC44B_OY2pZWqCxkYfOlU8lrlRL29aTvObS58hiVlfLPlWczz5NrK9Q9fBbv9CUFtjpNQ_3D_3D_uyqyrp';

export default function SummerFest() {
  const { isMobile } = useViewPort();

  return (
    <Layout className={styles.summerFestPage}>
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
      <Image
        src={logo}
        width={200}
        height={205}
        alt="logo"
        className={styles.logo}
      />
      <SummerFestHeader />
    </Layout>
  );
};
