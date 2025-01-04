import React from 'react';
import Link from 'next/link';
import { Card, Flex } from 'antd';
import { LinkedinOutlined, InstagramOutlined, SendOutlined } from '@ant-design/icons';

import styles from './styles.module.sass';

export const contactsArray = [
  {
    title: 'Linkedin',
    url: 'https://www.linkedin.com/company/it-connect-meetup/',
    icon: <LinkedinOutlined />,
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/it.connect.belgrade/',
    icon: <InstagramOutlined />,
  },
  {
    title: 'Telegram',
    url: 'https://t.me/itconnectbelgrade',
    icon: <SendOutlined />
  }
];

export default function ContactSection() {

  const contactCards = contactsArray
    .map((contact) => (
      <Link
        href={contact.url}
        target="_blank"
        key={contact.title}
      >
        <Card
          className={styles.contactCard}
        >
          {contact.icon}
          <div className={styles.contactCard__title}>
            {contact.title}
          </div>
        </Card>
      </Link>
    ));

  return (
    <section className={styles.contactsSection}>
      <h2 className={styles.contactsSection__title}>
        CONTACT US
      </h2>
      <Flex gap={40}>
        {contactCards}
      </Flex>
    </section>
  );
}
