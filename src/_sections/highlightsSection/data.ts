export type HighlightCard = {
  title: string;
  subtitle?: string;
  items?: string[];
  bigNumber?: string;
  footer?: string;
};

export const highlights2025: HighlightCard[] = [
  {
    title: 'Meetups',
    bigNumber: '7',
    footer: 'community meetups',
  },
  {
    title: 'Parties & fun events',
    bigNumber: '5',
    footer: 'nights to remember',
  },
  {
    title: 'Summerfests cancelled',
    bigNumber: '1',
    footer: 'to make room for new formats',
  },
  {
    title: 'New formats we tried',
    items: [
      'Debates',
      'AI Garage',
      'AI Week participation',
    ],
  },
  {
    title: 'Collabs with Serbian communities',
    items: [
      'Geospatial (Foursquare + Microsoft)',
      'Heap Space',
      'StartIt',
    ],
  },
  {
    title: 'Workshops',
    bigNumber: '5',
    footer: 'hands-on sessions',
  },
  {
    title: 'AI Garage',
    bigNumber: '1',
    footer: '6-week program',
  },
  {
    title: 'Connect Friday',
    bigNumber: '44',
    footer: 'weekly gatherings',
  },
];

