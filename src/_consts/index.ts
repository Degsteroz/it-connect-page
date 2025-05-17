export const imagePrefix = 'https://res.cloudinary.com/dtecpsig5/image/upload/v1735083083/';

export type NavigationLinkType = {
  title: string;
  id: string;
}

export const navigationLinks: NavigationLinkType[] = [
  {
    title: 'Closest event',
    id: 'closest-event',
  },
  {
    title: 'Events',
    id: 'events',
  },
  {
    title: 'Formats',
    id: 'formats',
  },
  {
    title: 'Sponsorship',
    id: 'sponsorship',
  },
  {
    title: 'Team',
    id: 'team',
  },
  {
    title: 'Contacts',
    id: 'contacts',
  },
];
