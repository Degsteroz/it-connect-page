import React from 'react';
import { Flex } from 'antd';
import Link from 'next/link';

import { ArrowDownOutlined, CloseCircleOutlined, WarningOutlined } from '@ant-design/icons';

import styles from './styles.module.sass';

const stringText = 'Билеты уже в продаже! · Tickets now available! · チケットは販売中です！· Billets déjà en vente ! · Tickets jetzt erhältlich! · Karte već u prodaji! ·';

export default function SummerFestHeader() {
  return (
    <div className={styles.summerFestHeader}>
      <div className={styles.summerFestHeaderTextBlock}>
        <div className={styles.japan}>
          <div>
            夏のITフェスティバル
          </div>
        </div>
        <div className={styles.text}>
          <h1 className={styles.title}>
            IT SUMMER FEST
          </h1>
          <Flex
            className={styles.info}
            vertical
          >
            <div>
              by <Link href={'/'} className={styles.callToAction}>IT CONNECT</Link>
            </div>
            <div>
              16 August, Saturday, 12:00
            </div>
            <div>
              Dorćol Platz, Belgrade, Dobračina 59
            </div>

            <Link href="#tickets" className={styles.callToAction}>
              <Flex gap={20}>
                <WarningOutlined />
                <CloseCircleOutlined />
                <ArrowDownOutlined />
                BUY TICKETS NOW
                <ArrowDownOutlined />
                <CloseCircleOutlined />
                <WarningOutlined />
              </Flex>
            </Link>
          </Flex>
        </div>
      </div>

      <div className={styles.tickerWrapper}>
        <div className={styles.tickerContent}>
          <span className={styles.tickerText}>{stringText}</span>
          <span className={styles.tickerText}>{stringText}</span>
        </div>
      </div>

      <div className={styles.decals}>
        <span className={styles.stamp}>{'///'} SYSTEM: CONNECTED</span>
        <span className={styles.port}>PORT 44100</span>
        <span className={styles.codeblock}>ITC.GD</span>
        <div className={styles.cross}/>
        <div className={styles.arrowLine}/>
        <span className={styles.jpLabel}>ベオグラード・オンライン</span>
      </div>
    </div>
  );
};
