import React from 'react';
import { Flex } from 'antd';
import Link from 'next/link';

import styles from './styles.module.sass';
import { PayCircleOutlined } from '@ant-design/icons';

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
        <div className={`${styles.ticketCard} ${styles.soldout}`}>
          <div className={`${styles.cardTitle} ${styles['early']}`}>
            EARLY BIRD
          </div>

          <div className={styles.price}>
            43€
          </div>

          <div className={styles.label}>
            GET NOW!
          </div>
          <div className={styles.accent}>Limited to the first 200 tickets!</div>
        </div>

        <Link
          className={styles.ticketCard}
          target="_blank"
          href="#"
          data-oblak-widget
          data-event-id="dTRVwiFu"
        >
          <div className={styles.cardTitle}>
            REGULAR
          </div>

          <div className={styles.price}>
            52€
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
