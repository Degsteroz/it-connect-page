export type FormatCategory = 'Food Zone' | 'Tech Zone' | 'Entertainment';

export interface Activity {
  id: string;
  name: string;
  stage: string;
  description?: string;
  note?: string;
}

export interface Format {
  category: FormatCategory;
  description?: string;
  isFoodIncluded?: boolean;
  activities: Activity[];
}

export const eventFormats: Format[] = [
  {
    category: 'Tech Zone',
    description: 'Engage with tech talks, workshops, pitches, and job fair opportunities.',
    activities: [
      {
        id: 'talks-6-speakers-big-open',
        name: 'Talks - 6 Speakers (Big Open Stage)',
        stage: 'Big Open Stage',
      },
      {
        id: 'talks-6-speakers-main',
        name: 'Talks - 6 Speakers (Main Stage)',
        stage: 'Main Stage',
      },
      {
        id: 'talks-6-speakers-small',
        name: 'Talks - 6 Speakers (Small Stage)',
        stage: 'Small Stage',
      },
      {
        id: 'open-talk',
        name: 'Open Talk',
        stage: 'Big Open Stage',
      },
      {
        id: 'workshop-yandex',
        name: 'Workshop Yandex',
        stage: 'Big Open Stage ',
      },
      {
        id: 'start-up-pitches',
        name: 'Start Up Section + Pitches',
        stage: 'Small Open Stage ',
      },
      {
        id: 'job-fair',
        name: 'Job Fair',
        stage: 'Entrance Zone',
      },
    ],
  },
  {
    category: 'Food Zone',
    description: 'All food is included in the ticket price. Enjoy delicious meals and relax.',
    isFoodIncluded: true,
    activities: [
      {
        id: 'hookah-place',
        name: 'Hookah Place',
        stage: 'Appendix',
        note: 'Hookah availability may be limited or paid separately.',
      },
      {
        id: 'pilaf',
        name: 'Pilaf',
        stage: 'Central Zone',
        description: 'Potential Serbian record for cooking pilaw for the largest number of people',
      },
      {
        id: 'rostilj',
        name: 'Rostilj',
        stage: 'Central Zone',
      },
    ],
  },
  {
    category: 'Entertainment',
    description: 'Enjoy live music, stand up shows and DJ afterparty.',
    activities: [
      {
        id: 'live-music',
        name: 'Live Music',
        stage: 'Main Stage',
      },
      {
        id: 'afterparty-dj',
        name: 'Afterparty with DJ',
        stage: 'Main Stage',
      },
      {
        id: 'stand-up',
        name: 'Stand Up',
        stage: 'Small Open Stage',
      },
    ],
  },
];
