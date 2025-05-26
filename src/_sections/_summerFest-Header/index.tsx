import React from 'react';
import { Flex } from 'antd';

import styles from './styles.module.sass';
import Link from 'next/link';

const ticketLink = 'https://tic.rs/en/belgrade/events/parties-19/it-summer-fest-1369';

export default function SummerFestHeader() {
  return (
    <Flex
      align="flex-start"
      justify='center'
      className={styles.summerFestHeader}
    >
      <div className={styles.summerFestHeaderTextBlock}>
        <h1 className={styles.title}>
          IT <span style={{ color: '#bdef8e' }}>SUMMER</span> FEST
        </h1>
        <Flex
          className={styles.info}
          gap={20}
          vertical
        >
          <div>
            16 <span style={{ color: '#bdef8e' }}>August,</span> Saturday, 12:00
          </div>
          <div>
            Dorćol Platz, <span style={{ color: '#bdef8e' }}>Belgrade,</span> Dobračina 59
          </div>
        </Flex>

        <Flex
          gap={20}
          align="center"
          justify="center"
        >
          <Link
            className={styles.ticketCard}
            href={ticketLink}
            target="_blank"
          >
            <div className={`${styles.cardTitle} ${styles['early']}`}>
              EARLY BIRD
            </div>

            <div className={styles.price}>
              5000 rsd
            </div>

            <div className={styles.label}>
              GET NOW!
            </div>
          </Link>

          <Link
            className={styles.ticketCard}
            href={ticketLink}
            target="_blank"
          >
            <div className={styles.cardTitle}>
              REGULAR
            </div>

            <div className={styles.price}>
              6000 rsd
            </div>

            <div className={styles.label}>
              GET NOW!
            </div>
          </Link>
        </Flex>

        <div className={styles.accent}>First 200 tickets for 5.000 RSD only!</div>
      </div>
    </Flex>
  );
};
