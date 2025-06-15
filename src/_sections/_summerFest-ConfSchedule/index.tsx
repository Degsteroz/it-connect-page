'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { Timeline } from 'antd';
import Image from 'next/image';
import { CloseOutlined } from '@ant-design/icons';

import { useViewPort } from '@/_hooks';

import { timeBasedSchedule } from './data';

import styles from './styles.module.sass';

const mapUrl = 'https://res.cloudinary.com/dtecpsig5/image/upload/v1749695181/it-connect/ConfMap_nkdwpu.png';

const ZONE_COORDS = {
  'Appendix':         { top: 40,  left: 373, width: 90, height: 33 },
  'Main Stage':       { top: 148, left: 500, width: 107, height: 33 },
  'Small Open Stage': { top: 237, left: 229, width: 158, height: 33 },
  'Central Zone':    { top: 348, left: 252, width: 117, height: 33 },
  'Small Stage':      { top: 470, left: 239, width: 106, height: 32 },
  'Entrance Zone':    { top: 590, left: 388, width: 102, height: 30 },
  'Big Open Stage':   { top: 556, left: 738, width: 139, height: 29 },
};

const scaleZoneCoords = (factor: number) =>
  Object.fromEntries(
    Object.entries(ZONE_COORDS).map(([zone, { top, left, width, height }]) => [
      zone,
      {
        top: Math.round(top * factor),
        left: Math.round(left * factor),
        width: Math.round(width * factor),
        height: Math.round(height * factor),
      },
    ])
  );

export default function SummerFestConfSchedule() {
  const { isMobile } = useViewPort();
  const [activeZone, setActiveZone] = useState<string | null>(null);
  const [factor, setFactor] = useState<number>(1);
  const items = Object.entries(timeBasedSchedule)?.map(([time, items]) => ({
    label: time,
    children: items.map((item) => {
      const className = `${styles.label} ${!activeZone || activeZone === item.stage ?  styles.active : '' }`;
      return (
        <div
          key={`${time}_${item.stage}_${item.type}`}
          className={className}
        >
          <div className={styles.labelStage}>
            {item.stage}:
          </div>
          <div className={styles.labelType}>
            {item.type}
          </div>
        </div>
      );
    }),
  })) || [];

  useEffect(() => {
    if ((typeof window === 'undefined') || isMobile) return;

    const windowHeight = window.innerHeight;
    const coefficient = windowHeight * 0.70;
    setFactor(coefficient / 691);
  }, [isMobile]);

  const currentCoords = useMemo(() => {
    return scaleZoneCoords(factor);
  }, [factor, isMobile]);

  if (isMobile) {
    return (
      <div className={styles.confSchedule}>
        <div className={styles.title}>Schedule</div>
        <div className={styles.buttonsWrapper}>
          {Object.keys(ZONE_COORDS).map(key => (
            <div
              key={key} className={`${styles.button} ${key === activeZone ? styles.active : ''}`}
              onClick={() => setActiveZone(prevState => {
                return prevState === key ? null : key;
              })}
            >
              {key}
              {key === activeZone && (
                <CloseOutlined />
              )}
            </div>
          ))}
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.timeline}>
            <Timeline
              mode="alternate"
              items={items}
              style={{
                width: '100%',
                fontSize: '34px',
              }}
            />
          </div>
        </div>
      </div>
    );

  }

  return (
    <div className={styles.confSchedule}>
      <div className={styles.title}>Schedule</div>
      <div className={styles.verticalBar} />
      <div className={styles.contentWrapper}>
        <div>
          <div className={styles.mapWrapper}>
            <div className={styles.currentStageBlock}>
              <h3>{activeZone || 'All zones'}</h3>
              {activeZone && (
                <CloseOutlined onClick={() => setActiveZone(null)} />
              )}
            </div>
            <div style={{ position: 'relative' }}>
              <Image
                src={mapUrl}
                width={925 *  factor}
                height={691 *  factor}
                alt="Fest map"
              />
              {Object.entries(currentCoords).map(([zone, coords]) => (
                <div
                  key={zone}
                  onClick={() => setActiveZone(prevState => {
                    return prevState === zone ? null : zone;
                  })}
                  style={{
                    position: 'absolute',
                    ...coords,
                    background: 'transparent',
                    border: zone === activeZone ? '2px dashed black' : 'none',
                    cursor: 'pointer',
                  }}
                  title={zone}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.timeline}>
          <Timeline
            mode="alternate"
            items={items}
            style={{
              width: '100%',
              fontSize: '34px',
            }}
          />
        </div>
      </div>
    </div>
  );
}
