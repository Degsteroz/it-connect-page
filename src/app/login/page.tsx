'use client';
import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

import styles from './styles.module.sass';
import { auth } from '@/_fireBase';

export default function LoginPage() {
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/back-office');
      }
    });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const target = e.currentTarget as typeof e.currentTarget & {
      email: HTMLInputElement
      password: HTMLInputElement
    };
    handleLogin(target.email.value, target.password.value);
  };

  const handleLogin = (email: string, password: string): void => {
    // Здесь реализуйте вызов метода авторизации с переданными данными
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.push('/back-office');
      });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Авторизация</title>
      </Head>
      <div className={styles.loginBox}>
        <h1>Вход</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required/>

          <label htmlFor="password">Пароль</label>
          <input type="password" id="password" name="password" required/>

          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
}
