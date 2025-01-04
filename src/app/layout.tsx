import React from 'react';
import type { Metadata } from 'next';
import { Exo_2, Geist_Mono, DM_Sans } from 'next/font/google';
import './globals.css';

const exo2Sans = Exo_2({
  variable: '--font-exo2-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'IT CONNECT',
  description: 'IT community in Belgrade'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${exo2Sans.variable} ${geistMono.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
