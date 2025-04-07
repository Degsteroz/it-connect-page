import React from 'react';
import type { Metadata } from 'next';
import { Onest, Poppins } from 'next/font/google';
import './globals.css';

const onest = Onest({
  variable: '--font-onest',
  subsets: ['latin'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['500', '700'],
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
      <body className={`${onest.variable} ${poppins.variable}`} id="homePage">
        {children}
      </body>
    </html>
  );
}
