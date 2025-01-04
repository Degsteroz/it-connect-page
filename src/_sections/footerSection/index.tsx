import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MailOutlined } from '@ant-design/icons';
import { Avatar, Flex, Space } from 'antd';

import { contactsArray } from '@/_sections/contactsSection';

import { imagePrefix } from '@/_consts';

import styles from './styles.module.sass';

const personsToConnect = [
  {
    name: 'Viktoria Ermakova',
    mail: 'ermakova.vv.gis@mail.com',
    avatar: 'avatars_vika'
  },
  {
    name: 'Ilina Nigmatullina',
    mail: 'inigmat@yahoo.com',
    avatar: 'avatars_ilina'
  },
];

const logoImageUrl ='itConnectLogoLarge';

export default function FooterSection() {

  const contactCards = contactsArray
    .map((contact) => (
      <Link
        href={contact.url}
        target="_blank"
        key={contact.title}
        style={{
          fontSize: '20px',
        }}
      >
        {contact.icon}
      </Link>
    ));

  const personsComponents = personsToConnect.map(person => (
    <Link
      href={`mailto:${person.mail}`}
      target={'_blank'}
      key={person.mail}
      style={{
        width: 'fit-content'
      }}
    >
      <Space>
        <Avatar
          size="large"
          src={imagePrefix + person.avatar}
          alt={person.name}
        />

        <Flex
          vertical
          style={{
            fontSize: '18px'
          }}
        >
          {person.name}
          <Space>
            <MailOutlined/>
            {person.mail}
          </Space>
        </Flex>
      </Space>
    </Link>
  ));

  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerSection__content}>
        <Flex
          align={'center'}
          gap={10}
        >
          <Image
            src={imagePrefix + logoImageUrl}
            alt={'about image'}
            width={40}
            height={40}
          />
          <h2>IT CONNECT</h2>
        </Flex>

        <Flex vertical gap={10}>
          For collaboration inquiries, please reach out to:
          {personsComponents}
        </Flex>

        <Flex
          gap={5}
          vertical
          style={{
            margin: 'auto 0'
          }}
        >
          Stay tuned!
          <Flex gap={10}>
            {contactCards}
          </Flex>
        </Flex>

        <div>{new Date().getFullYear()}</div>
      </div>
    </footer>
  );
}
