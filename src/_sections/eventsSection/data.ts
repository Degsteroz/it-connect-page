export enum EventsTypes {
  MEETUP,
  NETWORK,
}

export type Meetup = {
  title: string;
  date: string;
  statistic: {
    speakers: number;
    organizers: number;
    participants: number;
    duration: number;
  },
  topicList?: string[];
  description?: string[];
  _type: EventsTypes.MEETUP
  image: string
  link: string
}

export type Network = {
  title: string;
  date: string;
  description: string[];
  _type: EventsTypes.NETWORK;
  image: string;
  link: string;
}

export const events: (Meetup | Network)[] = [
  {
    title: 'IT Connect: AI в действии',
    date: '07.12.2024',
    statistic: {
      speakers: 3,
      organizers: 8,
      participants: 68,
      duration: 4
    },
    topicList: [
      'Three inspiring talks on AI',
      'Group networking sessions',
      'And for the first time ever, an exciting AI-prompt guessing game that had everyone laughing and competing!',
    ],
    link: 'https://disk.yandex.ru/d/OWOnQLB3EZH14g',
    _type: EventsTypes.MEETUP,
    image: 'https://it-conect.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fba98bd55-74f8-46aa-a976-7248c0b8b835%2F9dd9d710-fd61-4714-a557-053a8882bd3b%2F3c5d996b-4f32-4212-8c59-6a88786634cb.png?table=block&id=1605addd-450c-8025-8629-fabf69b890ef&spaceId=ba98bd55-74f8-46aa-a976-7248c0b8b835&width=1200&userId=&cache=v2'
  },
  {
    title: 'IT Connect: Driving IT Success',
    date: '25.10.2024',
    statistic: {
      speakers: 2,
      organizers: 7,
      participants: 65,
      duration: 3
    },
    topicList: [
      'Common Sense Software Architecture Diagramming',
      '3 Timeless Tips on Starting a Business, Personal Development, and Wealth',
    ],
    link: 'https://disk.yandex.ru/d/OWOnQLB3EZH14g',
    _type: EventsTypes.MEETUP,
    image: 'https://it-conect.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fba98bd55-74f8-46aa-a976-7248c0b8b835%2Fd1dbd30d-f8af-472a-aad2-928027a426a1%2FDSC_2741.jpg?table=block&id=1605addd-450c-8022-8e25-ef6a7675ac9a&spaceId=ba98bd55-74f8-46aa-a976-7248c0b8b835&width=1200&userId=&cache=v2'
  },
  {
    title: 'Meetup Yandex x IT Connect',
    date: '28.09.2024',
    statistic: {
      speakers: 2,
      organizers: 10,
      participants: 80,
      duration: 5
    },
    topicList: [
      'Distributed SQL Databases as a Remedy for Regrets',
      'Clean Architecture in Client Applications',
      'Why Argumentation Doesn’t Work: How to Improve Persuasion Skills'
    ],
    link: 'https://disk.yandex.ru/d/10Xo0aC9CkViDQ',
    _type: EventsTypes.MEETUP,
    image: 'https://it-conect.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fba98bd55-74f8-46aa-a976-7248c0b8b835%2F25a0eb85-a181-4e08-9ddc-536cb256ba99%2F921A5258_resized.jpg?table=block&id=1605addd-450c-8073-9ae9-eb91f45a8942&spaceId=ba98bd55-74f8-46aa-a976-7248c0b8b835&width=1200&userId=&cache=v2'
  },
  {
    title: 'pmclub & IT Connect: Project',
    date: '30.08.2024',
    statistic: {
      speakers: 3,
      organizers: 12,
      participants: 65,
      duration: 4
    },
    topicList: [
      'How to Properly Estimate Tasks in Projects: Hours or Story Points?',
      'How to Write a Project Summary',
      'Stand-up: How to Survive as a Humanities Major Among Techies'
    ],
    link: 'https://disk.yandex.ru/d/eMmyzS63o9DoCg',
    _type: EventsTypes.MEETUP,
    image: 'https://it-conect.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fba98bd55-74f8-46aa-a976-7248c0b8b835%2Fc471d43b-1e34-4ea9-aa3e-ca66977fb683%2FDSC_3430.jpg?table=block&id=1605addd-450c-8029-af67-e511b7c35456&spaceId=ba98bd55-74f8-46aa-a976-7248c0b8b835&width=1200&userId=&cache=v2'
  },
  {
    title: 'Open Air FRESH',
    date: '27.07.2024',
    description: [
      'What an incredible day! Our party, brought to life by the collaboration between CIDER.RS, IT Connect, and DVA MEDVEDA, was an absolute blast with 145 people joining in on the fun!',
      'We cranked up the energy this time with even more activities: Twister, an upgraded Bingo, insight games, Limbo, and a mix of logic and endurance challenges.'
    ],
    link: 'https://disk.yandex.ru/d/10Xo0aC9CkViDQ',
    _type: EventsTypes.NETWORK,
    image: 'https://it-conect.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fba98bd55-74f8-46aa-a976-7248c0b8b835%2F5fe31921-a30b-44e0-9b7b-c11872145251%2FDSC_4877_(2).jpg?table=block&id=cf4fa347-c934-484a-9e20-1b1170abc543&spaceId=ba98bd55-74f8-46aa-a976-7248c0b8b835&width=1200&userId=&cache=v2'
  },
  {
    title: 'IT SUMMER FEST',
    date: '06.07.2024',
    description: [
      'We brought together 245 attendees, setting a new record for our community!',
      'Hosted 8 talks and 5 pitch presentations. We\'re working on the recordings and will share them soon.',
      'Gathered over 60 job openings across various IT sectors in Belgrade.',
      'Participants even had the chance to meet some HR representatives on-site.'
    ],
    link: 'https://photos.app.goo.gl/KbUwBDoQV9K2F5ie6',
    _type: EventsTypes.NETWORK,
    image: 'https://it-conect.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fba98bd55-74f8-46aa-a976-7248c0b8b835%2F3e4435a3-4383-4a3a-bec8-a929e8c29276%2F921A5608.jpg.jpeg?table=block&id=0e8df227-951d-4a68-ae46-e0cf959c4ef1&spaceId=ba98bd55-74f8-46aa-a976-7248c0b8b835&width=1200&userId=&cache=v2',
  },
  {
    title: 'Network “White Paper”',
    date: '27.01.2024',
    statistic: {
      speakers: 6,
      organizers: 8,
      participants: 64,
      duration: 6
    },
    description: [
      'Developed a fun game for all attendees. The main idea was to assist people and add some activity to break the ice.',
      'IT StandUps about mishaps in work, sharing amusing work-related anecdotes.',
    ],
    link: 'https://photos.app.goo.gl/hYdJ1yTagN9QPTmW9',
    _type: EventsTypes.MEETUP,
    image: 'https://it-conect.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fba98bd55-74f8-46aa-a976-7248c0b8b835%2Fecd1f3e4-d76b-4dd3-b174-dd7a182418f1%2Fimgonline-com-ua-Resize-YlpWVD8lLzH.jpg?table=block&id=cf063dff-3469-4a19-8084-b5e89f29994d&spaceId=ba98bd55-74f8-46aa-a976-7248c0b8b835&width=1200&userId=&cache=v2'
  },
  {
    title: 'Open Air DVA MEDVEDA',
    date: '26.06.2024',
    description: [
      'The event took place near the Danube waterfront at our friends Dorćol Brewery. ',
      'We hosted around 100 people throughout the day, creating a space for an epic Saturday chill session: water guns, beer pong, bingo, Jenga, a fire show, live DJ music, and, of course, amazing drinks and grill.',
      '11 hours of live interaction, entertainment, and bright moments!',
    ],
    link: 'https://photos.app.goo.gl/7gs4oNXEXexUFiWj7',
    _type: EventsTypes.NETWORK,
    image: 'https://it-conect.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fba98bd55-74f8-46aa-a976-7248c0b8b835%2Fedda1274-48f5-4c19-8c8a-92b42f9819e4%2Fphoto_2024-06-30_18-10-39_(1).jpg?table=block&id=1605addd-450c-801f-a52a-c7570cedb2bc&spaceId=ba98bd55-74f8-46aa-a976-7248c0b8b835&width=1200&userId=&cache=v2'
  },
  {
    title: 'Work Skills',
    date: '30.03.2024',
    statistic: {
      speakers: 3,
      organizers: 7,
      participants: 61,
      duration: 4
    },
    topicList: [
      'How to quickly integrate into a new team and become one of them.',
      'Use the outsource companies as a springboard to a Senior position.',
      'Workation = work + vacation'
    ],
    link: 'https://photos.app.goo.gl/3xQp32EeWnodD7q17',
    _type: EventsTypes.MEETUP,
    image: 'https://it-conect.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fba98bd55-74f8-46aa-a976-7248c0b8b835%2F1e2e2877-67b5-4da5-ba31-7af3a4851304%2FDSC_0557.jpg?table=block&id=496a2a12-fe09-4fcc-9672-eee4d4182220&spaceId=ba98bd55-74f8-46aa-a976-7248c0b8b835&width=1200&userId=&cache=v2'
  },
  {
    title: 'Personal Growth',
    date: '24.02.2024',
    statistic: {
      speakers: 3,
      organizers: 8,
      participants: 56,
      duration: 4
    },
    topicList: [
      'How to level up LinkedIn without mentors and ChatGPT.',
      'Why we fail to complete tasks/projects and how to deal with it.',
      'Auftragstaktik - goals above all else.'
    ],
    link: 'https://photos.app.goo.gl/5vYuSqmtt4WakTfP7',
    _type: EventsTypes.MEETUP,
    image: 'https://it-conect.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fba98bd55-74f8-46aa-a976-7248c0b8b835%2F37eb62a8-5b09-4826-9d77-eb6bed0a6deb%2FIMG_4157-full.jpg?table=block&id=ef25644d-36de-40b4-b0e9-5be1ef2da7de&spaceId=ba98bd55-74f8-46aa-a976-7248c0b8b835&width=1200&userId=&cache=v2'
  },
  {
    title: 'IT Startups',
    date: '03.12.2023',
    statistic: {
      speakers: 4,
      organizers: 7,
      participants: 42,
      duration: 3.5
    },
    topicList: [
      'How to test your business idea for pennies.',
      'FuckUp Nights',
      'Knowledge sharing.',
      'Why people WANT to work for startups.',
    ],
    link: 'https://photos.app.goo.gl/5vYuSqmtt4WakTfP7',
    _type: EventsTypes.MEETUP,
    image: 'https://it-conect.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fba98bd55-74f8-46aa-a976-7248c0b8b835%2Fae503027-e045-4b79-a978-7fb027cf798d%2FIMG_2273.jpg?table=block&id=c0453989-cac6-4de4-bb26-03bec326a321&spaceId=ba98bd55-74f8-46aa-a976-7248c0b8b835&width=1200&userId=&cache=v2'
  },
  {
    title: 'Soft Skills 2.0',
    date: '28.10.2023',
    statistic: {
      speakers: 3,
      organizers: 7,
      participants: 47,
      duration: 4
    },
    topicList: [
      'Team leadership for dummies.',
      'Success in the IT world: Why Emotional Intelligence is superior to IQ and how developers can master it.',
      'Knowledge sharing.',
      'Non-obvious life hacks to combat anxiety.',
    ],
    link: 'https://photos.app.goo.gl/8ERt3ddNqyVj6yrJ9',
    _type: EventsTypes.MEETUP,
    image: 'https://it-conect.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fba98bd55-74f8-46aa-a976-7248c0b8b835%2F39374b4f-3012-40b2-aecd-1ed6c0718ecd%2FIMG010.jpg?table=block&id=94b3eb77-274b-446c-b2cd-b21735a3c037&spaceId=ba98bd55-74f8-46aa-a976-7248c0b8b835&width=1200&userId=&cache=v2'
  },
  {
    title: 'Job Research',
    date: '30.09.2023',
    statistic: {
      speakers: 3,
      organizers: 8,
      participants: 52,
      duration: 4
    },
    topicList: [
      'What to do if you have a team that is demotivated by the actions of the company’s management.',
      'How to pass any social security: three simple schemes for preparing for a job search.',
      'How to find work in modern realities',
    ],
    link: 'https://photos.app.goo.gl/ZEm8DPQujpQ9Dx2v6',
    _type: EventsTypes.MEETUP,
    image: 'https://it-conect.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fba98bd55-74f8-46aa-a976-7248c0b8b835%2Fcd5542b2-8022-43c8-8b86-ab32ce652538%2FKU__9759_(1).jpg?table=block&id=13e9788e-9de8-49b6-88d0-4f73e9129bf2&spaceId=ba98bd55-74f8-46aa-a976-7248c0b8b835&width=1200&userId=&cache=v2'
  },
  {
    title: 'Challenges 2023',
    date: '09.12.2022',
    statistic: {
      speakers: 3,
      organizers: 10,
      participants: 48,
      duration: 4
    },
    topicList: [
      'Overcoming Burnout: A Guide to Self-Care',
      'No-code AI Product Creation',
      'Career Growth Secrets: Navigating from Junior to Staff',
      'Engaging Panel Discussion after topics'
    ],
    link: 'https://photos.app.goo.gl/eSV49ZdEB7uRWmEL9',
    _type: EventsTypes.MEETUP,
    image: 'https://it-conect.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fba98bd55-74f8-46aa-a976-7248c0b8b835%2Fd22659fd-45bc-4891-a590-cb793fa525ee%2FIMG_2863-full_(1).jpg?table=block&id=1605addd-450c-803f-8d09-d39cd3d71a1f&spaceId=ba98bd55-74f8-46aa-a976-7248c0b8b835&width=1200&userId=&cache=v2',
  },
  {
    title: 'Soft Skills',
    date: '29.10.2022',
    statistic: {
      speakers: 4,
      organizers: 6,
      participants: 59,
      duration: 4
    },
    topicList: [
      'Behavior interviews in the Western market.',
      'Soft Skills for Interviews.',
      'FOMO & Impostor syndrome.',
    ],
    link: 'https://photos.app.goo.gl/RRHsNNsNnbQa7Jop6',
    _type: EventsTypes.MEETUP,
    image: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fba98bd55-74f8-46aa-a976-7248c0b8b835%2Ff3afdd81-afce-4ef7-bf65-89de6a3fdab4%2FIMG_9115_(1).jpg/size/w=1200?exp=1735259805&sig=mWR2ZiaptF0LpUxqPaDUs5z1HutOJQ8ugbfHG3xlXIg'
  },
];
