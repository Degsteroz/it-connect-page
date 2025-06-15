'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import { useViewPort } from '@/_hooks';

import { type Speaker, tracks } from './data';
import styles from './styles.module.sass';

export default function SummerFestSpeakers() {
  const [track,  setTrack] = useState<string>(tracks[0].title);
  const { isMobile } = useViewPort();

  const getSpeakers = (speakers: Speaker[], trackTitle: string) => speakers.map((speaker, index) => {
    if (speaker.empty) {
      return (
        <div className={styles.speakerCard} key={speaker.name + '___' + index + '__' + trackTitle}>
          TBA
        </div>
      );
    }

    return (
      <div className={styles.speakerCard} key={speaker.name}>
        <div className={styles.speakerPhotoWrapper}>
          <Image
            className={styles.speakerPhoto}
            src={speaker.photo}
            alt={speaker.name}
            width={375}
            height={440}
          />
        </div>
        <div className={styles.speakerInfo}>
          <div className={styles.speakerNameBlock}>
            <div className={styles.speakerName}>{speaker.name}</div>
            <div className={styles.speakerCountry}>{speaker.country}</div>
          </div>
          <div className={styles.speakerTitle}>{speaker.title}</div>
          <div className={styles.speakerSpeech}>{speaker.speech}</div>
        </div>
      </div>
    );
  });

  const cards = tracks.map(track => (
    <div className={styles.trackCard} key={track.title}>
      <div className={styles.trackTitle}>{track.title}</div>
      <div className={styles.trackDescription}>{track.description}</div>
      <div className={styles.speakersList}>
        {getSpeakers(track.speakers, track.title)}
      </div>
    </div>
  ));

  if (isMobile) {
    const currentTrack = tracks.find(item => item.title === track);

    if (!currentTrack) return null;

    return (
      <div className={styles.summerFestSpeakers}>
        <div className={styles.speakersTitle}>
          TRACKS
        </div>
        <div className={styles.tracksButtons}>
          {tracks.map(item => (
            <div
              key={item.title}
              className={`${styles.trackButton} ${item.title === track ? styles.active : ''}`}
              onClick={() => setTrack(item.title)}
            >
              {item.title}
            </div>
          ))}
        </div>
        <div className={styles.trackCard} key={currentTrack.title}>
          <div className={styles.trackTitle}>{currentTrack.title}</div>
          <div className={styles.trackDescription}>{currentTrack.description}</div>
          <div className={styles.speakersList}>
            {getSpeakers(currentTrack.speakers, currentTrack.title)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.summerFestSpeakers}>
      <div className={styles.speakersTitle}>
        TRACKS
        <div className={styles.cyberBarcode}></div>
      </div>
      <div className={styles.cardsWrapper}>
        {cards}
      </div>
    </div>
  );
}
