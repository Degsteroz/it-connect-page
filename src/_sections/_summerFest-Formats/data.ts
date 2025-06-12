export type FormatCategory = 'Food Zone' | 'Tech Zone' | 'Entertainment';

export interface Activity {
  id: string;
  name: string;
  scene: string;
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
        name: 'Talks - 6 Speakers (Big Open Scene)',
        scene: 'Big Open Scene',
      },
      {
        id: 'talks-6-speakers-main',
        name: 'Talks - 6 Speakers (Main Scene)',
        scene: 'Main Scene',
      },
      {
        id: 'talks-6-speakers-small',
        name: 'Talks - 6 Speakers (Small Scene)',
        scene: 'Small Scene',
      },
      {
        id: 'open-talk',
        name: 'Open Talk',
        scene: 'Big Open Scene',
      },
      {
        id: 'workshop-yandex',
        name: 'Workshop Yandex',
        scene: 'Big Open Scene ',
      },
      {
        id: 'start-up-pitches',
        name: 'Start Up Section + Pitches',
        scene: 'Small Open Scene ',
      },
      {
        id: 'job-fair',
        name: 'Job Fair',
        scene: 'Entrance Zone',
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
        scene: 'Appendix',
        note: 'Hookah availability may be limited or paid separately.',
      },
      {
        id: 'pilaf',
        name: 'Pilaf',
        scene: 'Central Zone',
        description: 'Potential Serbian record for cooking pilaw for the largest number of people',
      },
      {
        id: 'rostilj',
        name: 'Rostilj',
        scene: 'Central Zone',
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
        scene: 'Main Scene',
      },
      {
        id: 'afterparty-dj',
        name: 'Afterparty with DJ',
        scene: 'Main Scene',
      },
      {
        id: 'stand-up',
        name: 'Stand Up',
        scene: 'Small Open Scene',
      },
    ],
  },
];
