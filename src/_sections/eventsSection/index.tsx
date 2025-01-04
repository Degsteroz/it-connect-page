'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import {
  Card,
  Flex,
  Space,
  Tag,
  Modal,
} from 'antd';

import { events, EventsTypes } from './data';

import ModalCardContent from './components/ModalCardContent';

import styles from './styles.module.sass';

export default function EventsSection() {
  const [cardIndex, setCardIndex] = React.useState<number | null>(null);

  useEffect(() => {
    if (cardIndex === null) return;

    const currentCard = document.getElementById('events-' + cardIndex);
    if (!currentCard) return;

    setTimeout(() => {
      currentCard.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'start',
      });
    }, 100);

  }, [cardIndex]);

  const eventsComponents = events.map((event, index) => {
    const isActive = index === cardIndex;
    const eventId = `events-${index}`;

    const handleCardClick = () => {
      setCardIndex(isActive ? null : index);
    };

    const isEvent = event._type === EventsTypes.MEETUP;

    return (
      <Space
        key={event.image}
        style={{
          height: '511px',
          gap: 0
        }}
        id={eventId}
      >
        <div className={styles.eventCard__preview}>
          {event.title}
          <div className={styles.date}>
            {event.date}
            <Tag
              color={isEvent ? 'blue' : 'green'}
              style={{
                width: '23px'
              }}
            >
              { isEvent ? 'Event': 'Networking'}
            </Tag>
          </div>
        </div>

        <Card
          hoverable
          className={styles.eventCard}
          styles={{
            body: {
              padding: 0,
              width: '100%',
            }
          }}
          onClick={handleCardClick}
        >
          <Flex justify={'center'}>
            <Image
              src={event.image}
              width="1024"
              height="683"
              alt=""
            />
          </Flex>
        </Card>
      </Space>

    );
  });

  return (
    <section className={styles.eventsSection}>
      <h2 className={styles.sectionHeader}>EVENTS</h2>
      <div className={styles.eventsWrapper} id="eventsWrapper">
        {eventsComponents}
      </div>

      <Modal
        open={cardIndex !== null}
        onCancel={() => setCardIndex(null)}
        width={'fit-content'}
        footer={false}
        className={styles.modal}
      >
        {cardIndex !== null && (
          <ModalCardContent event={events[cardIndex]} />
        )}
      </Modal>
    </section>
  );
}
