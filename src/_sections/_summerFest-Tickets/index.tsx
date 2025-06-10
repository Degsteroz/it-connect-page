import React from 'react';
import { Flex } from 'antd';
import Link from 'next/link';

import styles from './styles.module.sass';
import { PayCircleOutlined } from '@ant-design/icons';

const ticketLink = 'https://tic.rs/en/belgrade/events/parties-19/it-summer-fest-1369';

export default function SummerFestTickets() {
  return (
    <div className={styles.ticketSection}>
      <div className={styles.title}>
        <PayCircleOutlined />
        <div>Tickets & Pricing</div>
        <PayCircleOutlined />
      </div>
      <div className={styles.subtitle}>
        Don’t miss out — limited availability!
      </div>
      <Flex
        gap={20}
        align="center"
        justify="center"
        className={styles.ticketCardWrapper}
      >
        <Link
          className={styles.ticketCard}
          href={ticketLink}
          target="_blank"
        >
          {/*<Image*/}
          {/*  src={imageUrl}*/}
          {/*  alt={'decoration'}*/}
          {/*  className={styles.image}*/}
          {/*  width={672}*/}
          {/*  height={404}*/}
          {/*/>*/}
          <div className={`${styles.cardTitle} ${styles['early']}`}>
            EARLY BIRD
          </div>

          <div className={styles.price}>
            5000 rsd
          </div>

          <div className={styles.label}>
            GET NOW!
          </div>
          <div className={styles.accent}>Limited to the first 200 tickets!</div>
        </Link>

        <Link
          className={styles.ticketCard}
          href={ticketLink}
          target="_blank"
        >
          {/*<Image*/}
          {/*  src={imageUrl}*/}
          {/*  alt={'decoration'}*/}
          {/*  className={`${styles.image} ${styles.revert}`}*/}
          {/*  width={672}*/}
          {/*  height={404}*/}
          {/*/>*/}
          <div className={styles.cardTitle}>
            REGULAR
          </div>

          <div className={styles.price}>
            6000 rsd
          </div>

          <div className={styles.label}>
            GET NOW!
          </div>
          <div style={{ height: '35px' }}/>
        </Link>
      </Flex>
    </div>
  );
};
