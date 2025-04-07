'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  doc,
  getDoc,
  onSnapshot,
} from 'firebase/firestore';
import { User } from 'firebase/auth';
import { Card } from 'antd';
import Image from 'next/image';

import { auth, eventsCollection } from '@/_fireBase';
import useStore from '@/_store';
import { IClosestEvent } from '@/_interfaces';

import { Meetup, Network } from '@/_sections/eventsSection/data';

import logo from '@/_assets/logo.svg';

import NavigationComponent from './_components/navigationComponent';

import styles from './_styles/styles.module.sass';

export default function BackOfficeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { setClosestEvent, setEvents } = useStore(state => state);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (!user) {
        router.push('/login');
        return;
      }

      setUser(user);
    });
  }, []);

  useEffect(() => {
    if (!user) return;
    const eventsRef = doc(eventsCollection, 'events');
    setLoading(true);

    getDoc(eventsRef)
      .then(events => {
        const { data } = events.data() as {data: Array<(Meetup | Network) & {id: number}>};

        setEvents(data);
        setLoading(false);
      });

    const unsub = onSnapshot(doc(eventsCollection, 'closestEvent'), (res) => {
      const data = res?.data() as IClosestEvent;
      setClosestEvent(data);
    });

    return () => unsub();
  }, [user]);

  return (
    <div className={styles.backOfficeComponent}>
      <div className={styles.backOfficeComponent__title}>
        <Image
          src={logo}
          alt={'logo'}
          width={300}
        />
        <h1 className={styles.backOffice__title}>
          BACK OFFICE
        </h1>
      </div>

      <NavigationComponent/>
      {!loading && (
        <Card className={styles.layout}>
          {children}
        </Card>
      )}
    </div>
  );
}
