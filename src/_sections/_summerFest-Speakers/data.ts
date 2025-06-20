export interface Speaker {
  name: string
  title: string
  country: string
  photo: string
  speech: string
  empty?: boolean
}

interface Track {
  title: string
  description: string
  speakers: Speaker[]
}

const baseUrl = 'https://res.cloudinary.com/dtecpsig5/image/upload/c_scale,w_376/v1749588055/it-connect/';

export const tracks: Track[] = [
  {
    title: 'QA',
    description: 'Quality assurance, testing strategies, and tools to ensure software reliability.',
    speakers: [
      {
        name: 'TBA',
        title: 'TBA',
        country: 'TBA',
        photo: 'https://avatars0.githubusercontent.com/u/10000000',
        speech: 'TBA',
        empty: true
      },
      {
        name: 'TBA',
        title: 'TBA',
        country: 'TBA',
        photo: 'https://avatars0.githubusercontent.com/u/10000000',
        speech: 'TBA',
        empty: true
      },
      {
        name: 'TBA',
        title: 'TBA',
        country: 'TBA',
        photo: 'https://avatars0.githubusercontent.com/u/10000000',
        speech: 'TBA',
        empty: true
      },
    ]
  },
  {
    title: 'Frontend',
    description: 'Modern web interfaces, performance optimization, and evolving frontend technologies.',
    speakers: [
      {
        name: 'TBA',
        title: 'TBA',
        country: 'TBA',
        photo: 'https://avatars0.githubusercontent.com/u/10000000',
        speech: 'TBA',
        empty: true
      },
      {
        name: 'TBA',
        title: 'TBA',
        country: 'TBA',
        photo: 'https://avatars0.githubusercontent.com/u/10000000',
        speech: 'TBA',
        empty: true
      },
      {
        name: 'TBA',
        title: 'TBA',
        country: 'TBA',
        photo: 'https://avatars0.githubusercontent.com/u/10000000',
        speech: 'TBA',
        empty: true
      },
    ]
  },
  {
    title: 'Backend',
    description: 'Server-side development, architecture design, scalability, and APIs.',
    speakers: [
      {
        name: 'JetBrains Speaker',
        title: 'TBA',
        country: 'TBA',
        photo: 'https://avatars0.githubusercontent.com/u/10000000',
        speech: 'TBA',
      },
      {
        name: 'TBA',
        title: 'TBA',
        country: 'TBA',
        photo: 'https://avatars0.githubusercontent.com/u/10000000',
        speech: 'TBA',
        empty: true
      },
      {
        name: 'TBA',
        title: 'TBA',
        country: 'TBA',
        photo: 'https://avatars0.githubusercontent.com/u/10000000',
        speech: 'TBA',
        empty: true
      },
    ]
  },
  {
    title: 'Blockchain',
    description: 'Decentralized technologies, smart contracts, and the future of Web3.',
    speakers: [
      {
        name: 'Artem Dubinin',
        title: 'Founder of Mighty.',
        country: 'Russia',
        photo: baseUrl + 'IMG_3851_ktiffb.jpg',
        speech: 'Will GameFi / NFTs make a comeback?',
      },
      {
        name: 'TBA',
        title: 'TBA',
        country: 'TBA',
        photo: 'https://avatars0.githubusercontent.com/u/10000000',
        speech: 'TBA',
        empty: true
      },
      {
        name: 'TBA',
        title: 'TBA',
        country: 'TBA',
        photo: 'https://avatars0.githubusercontent.com/u/10000000',
        speech: 'TBA',
        empty: true
      },
    ]
  },
  {
    title: 'Startups',
    description: 'Building from scratch, product-market fit, growth, and innovation.',
    speakers: [
      {
        name: 'Daria Vlaskina',
        title: 'Co-founder of theLinkSocial',
        country: 'Russia',
        photo: baseUrl + 'IMG_8638_dpkmxu.jpg',
        speech: 'LinkedIn for B2B: How to Attract Clients, Build Trust, and Scale Strategy Through Personal Profiles',
      },
      {
        name: 'TBA',
        title: 'TBA',
        country: 'TBA',
        photo: 'https://avatars0.githubusercontent.com/u/10000000',
        speech: 'TBA',
        empty: true
      },
      {
        name: 'TBA',
        title: 'TBA',
        country: 'TBA',
        photo: 'https://avatars0.githubusercontent.com/u/10000000',
        speech: 'TBA',
        empty: true
      },
    ]
  },
  {
    title: 'Soft Skills',
    description: 'Communication, leadership, teamwork, and personal growth in tech.',
    speakers: [
      {
        name: 'Dmitrii Ilenkov',
        title: 'PhD, PMP, P3.express Practitioner. Founder "pmclub"',
        country: 'Russia',
        photo: baseUrl + 'IMG_5859_h0c3pd.jpg',
        speech: 'How to Give Feedback Without Losing Friends',
      },
      {
        name: 'TBA',
        title: 'TBA',
        country: 'TBA',
        photo: 'https://avatars0.githubusercontent.com/u/10000000',
        speech: 'TBA',
        empty: true
      },
      {
        name: 'TBA',
        title: 'TBA',
        country: 'TBA',
        photo: 'https://avatars0.githubusercontent.com/u/10000000',
        speech: 'TBA',
        empty: true
      },
    ]
  },
  {
    title: 'Marketing',
    description: 'Digital marketing, branding, audience engagement, and growth strategies.',
    speakers: [
      {
        name: 'TBA',
        title: 'TBA',
        country: 'TBA',
        photo: 'https://avatars0.githubusercontent.com/u/10000000',
        speech: 'TBA',
        empty: true
      },
      {
        name: 'TBA',
        title: 'TBA',
        country: 'TBA',
        photo: 'https://avatars0.githubusercontent.com/u/10000000',
        speech: 'TBA',
        empty: true
      },
      {
        name: 'TBA',
        title: 'TBA',
        country: 'TBA',
        photo: 'https://avatars0.githubusercontent.com/u/10000000',
        speech: 'TBA',
        empty: true
      },
    ]
  },
  {
    title: 'Design',
    description: 'UX/UI design, creative processes, and building user-centered experiences.',
    speakers: [
      {
        name: 'Aleksandr Ustinov',
        title: 'Founder "BeaversBrothers"',
        country: 'Russia',
        photo: baseUrl + 'IMG_8045_p4aee1.jpg',
        speech: 'Branding Zvezdarska Šuma Park',
      },
      {
        name: 'TBA',
        title: 'TBA',
        country: 'TBA',
        photo: 'https://avatars0.githubusercontent.com/u/10000000',
        speech: 'TBA',
        empty: true
      },
      {
        name: 'TBA',
        title: 'TBA',
        country: 'TBA',
        photo: 'https://avatars0.githubusercontent.com/u/10000000',
        speech: 'TBA',
        empty: true
      },
    ]
  },
  {
    title: 'Product / Project',
    description: 'Product thinking, project execution, agile practices, and cross-functional teams.',
    speakers: [
      {
        name: 'Nodar Jintcharadze',
        title: 'Agile Coach at TBC Bank',
        country: 'Georgia',
        photo: baseUrl + 'DSCF8360_cchslr.png',
        speech: 'Finding Balance Between Standardization and Customization During Agile Transformations'
      },
      {
        name: 'Anastasia Abrashitova',
        title: 'Head of Devtools',
        country: 'Russia',
        photo: baseUrl + 'square_y8vd1e',
        speech: 'Drop everything and play games!',
      },
      {
        name: 'TBA',
        title: 'TBA',
        country: 'TBA',
        photo: 'https://avatars0.githubusercontent.com/u/10000000',
        speech: 'TBA',
        empty: true
      },
    ]
  },
  {
    title: 'AI',
    description: 'Artificial intelligence, machine learning, and the impact of emerging technologies.',
    speakers: [
      {
        name: 'Marko Milojkovic',
        title: 'Eterna Creative Founder',
        country: 'Serbia',
        photo: baseUrl + 'IMAGE_2025-06-10_22_24_14_ficqxm.jpg',
        speech: 'From idea to MVP in 60 days (with AI & no-code)'
      },
      {
        name: 'Konstantine Kevlishvili',
        title: 'Agile Coach, Product Owner and Project Manager',
        country: 'Georgia',
        photo: baseUrl + 'Agile_Coach_you6ih.jpg',
        speech: 'AI Productivity or Brainfog? Practical Survival Guide for Project Managers',
      },
      {
        name: 'TBA',
        title: 'TBA',
        country: 'TBA',
        photo: 'https://avatars0.githubusercontent.com/u/10000000',
        speech: 'TBA',
        empty: true
      },
    ]
  }
];
