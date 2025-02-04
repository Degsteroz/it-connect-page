export interface EventData {
  title: string;
  description: string;
  items: string[];
  footer?: string;
  photo: string;
}

export const data: EventData[] = [
  {
    title: 'Meetups',
    description: 'IT Connect meetups are regular events for IT professionals to share knowledge, connect with like-minded people, and expand their professional network. Each meetup includes:',
    items: [
      'Expert talks on trending topics such as development, AI, DevOps, product management, and more.',
      'Open discussions, where participants can ask questions and share their experiences.',
      'Networking in an informal setting to exchange ideas and explore new opportunities.'
    ],
    footer: 'We host meetups in both Russian and English, making IT Connect an inclusive space for the international tech community.',
    photo: 'https://it-conect.notion.site/image/attachment%3A6f4dc1ea-5ad9-4a32-a2f7-e195f63855eb%3A921A1916_resized.jpg?table=block&id=18d5addd-450c-8064-b52b-dec3a8558409&spaceId=ba98bd55-74f8-46aa-a976-7248c0b8b835&width=1010&userId=&cache=v2',
  },
  {
    title: 'Collaborations',
    description: 'IT Connect partners with companies and communities to create unique events that bridge different areas of the tech industry. Each collaboration is designed to bring value to both our members and partners, featuring:',
    items: [
      'Industry-specific insights from top experts and company representatives.',
      'Tailored event formats, from tech talks and panel discussions to hands-on workshops.',
      'A diverse audience, connecting specialists, managers, and decision-makers.'
    ],
    photo: 'https://it-conect.notion.site/image/attachment%3A343607a5-1877-492e-b398-44b3ac08cde9%3A921A5329_resized.jpg?table=block&id=18d5addd-450c-8007-a747-d29deeda233a&spaceId=ba98bd55-74f8-46aa-a976-7248c0b8b835&width=1010&userId=&cache=v2',
  },
  {
    title: 'Networking events',
    description: 'Networking events bring together IT professionals in a relaxed and informal atmosphere. These gatherings are all about meaningful conversations, new connections, and great company. Each event includes:',
    items: [
      'Engaging networking formats, from casual meetups to interactive games like White Cardboard, designed by our team.',
      'A diverse community, where developers, managers, and tech enthusiasts connect and exchange ideas.',
      'An international vibe, with events in both Russian and English, fostering cross-cultural communication.'
    ],
    footer: 'Whether you\'re looking for new career opportunities or just want to meet like-minded people, IT Connect networking events are the perfect place to do it.',
    photo: 'https://it-conect.notion.site/image/attachment%3Ad3278ef7-913f-46c0-8e6c-d826f0351256%3AIMG_8143-full.jpg?table=block&id=18d5addd-450c-80fc-913d-e0c549d47bec&spaceId=ba98bd55-74f8-46aa-a976-7248c0b8b835&width=1010&userId=&cache=v2',
  },
  {
    title: 'Workshops',
    description: 'Workshops are hands-on sessions designed for those who want to deepen their knowledge and gain practical skills. Led by industry experts, these workshops provide:',
    items: [
      'Interactive learning, where participants apply new concepts in real-time.',
      'A variety of topics, from Generative AI and software development to job search strategies.',
      'Small group settings, ensuring personalized feedback and deeper engagement.'
    ],
    photo: 'https://it-conect.notion.site/image/attachment%3A0b4f883f-dc3c-47e3-a068-0ed1d18412e2%3AIMG_0259_(1)_(1).jpg?table=block&id=18d5addd-450c-80bf-945b-f95710273706&spaceId=ba98bd55-74f8-46aa-a976-7248c0b8b835&width=1010&userId=&cache=v2',
  },
  {
    title: 'IT Pljeskavica',
    description: 'IT Pljeskavica is a series of casual lunch gatherings organized by IT Connect, offering a relaxed atmosphere for networking and conversation. Each event takes place at a new restaurant in Belgrade, providing a fresh experience every time. These gatherings include:',
    items: [
      'Casual conversations about technology, career, and life — no strict agenda, just good talks.',
      'A diverse community of developers, product managers, designers, and other IT professionals.',
      'New locations each time, exploring the best restaurants in Belgrade while enjoying a delicious lunch.'
    ],
    photo: 'https://it-conect.notion.site/image/attachment%3A1b3874ff-15e5-48c6-84c7-c6b9112e8d53%3A20240914_153240_(3).jpg?table=block&id=18d5addd-450c-80bf-80b0-c8ea16911a9d&spaceId=ba98bd55-74f8-46aa-a976-7248c0b8b835&width=1010&userId=&cache=v2',
  },
  {
    title: 'Connect Friday',
    description: 'Connect Friday is a weekly event for the international IT community, where professionals gather to unwind, network, and share ideas in an informal setting. Every Friday, we meet in the same location, offering a consistent space for connection.',
    items: [
      'Casual conversations about tech, career, and industry trends, with a focus on building meaningful relationships.',
      'An international audience, creating a dynamic environment for cross-cultural networking.',
      'A regular spot, making it easy to meet familiar faces and expand your professional network week after week.'
    ],
    photo: 'https://it-conect.notion.site/image/attachment%3A3d39d4b5-6379-442f-9939-82f4ea2c54e1%3ADSC_5227_(1).jpg?table=block&id=18d5addd-450c-8026-874e-eda8ee34c837&spaceId=ba98bd55-74f8-46aa-a976-7248c0b8b835&width=1010&userId=&cache=v2',
  },
  {
    title: 'IT Fests',
    description: 'IT Fests are large-scale events organized by IT Connect, bringing together tech professionals for a day of learning, networking, and fun. These festivals feature a unique combination of industry insights, hands-on activities, and community engagement, all in collaboration with leading tech companies.',
    items: [
      'Diverse talks and workshops from industry leaders, covering a wide range of topics from development to career growth.',
      'Networking opportunities with professionals, recruiters, and companies, creating a space for new connections and career opportunities.',
      'A job fair, where participants can meet top employers and explore career options in the tech industry.',
      'Engaging activities, from tech demos to interactive sessions, all in a lively and dynamic environment.'
    ],
    photo: 'https://it-conect.notion.site/image/attachment%3A12d7b141-78d7-4dfd-ad56-0fc215842f57%3A921A5671.jpg.jpeg?table=block&id=18d5addd-450c-805e-a29a-d91692530e40&spaceId=ba98bd55-74f8-46aa-a976-7248c0b8b835&width=1010&userId=&cache=v2',
  },
  {
    title: 'OpenAirs',
    description: 'OpenAirs are outdoor events organized by IT Connect in collaboration with partner bars, offering a refreshing blend of tech talks, networking, and fun activities in the open air. These events combine the best of both worlds: professional development and a laid-back atmosphere. Each OpenAir includes:',
    items: [
      'Engaging presentations and discussions, providing insights into the latest trends in technology and industry innovations.',
      'Interactive games and activities, creating a relaxed environment for networking and new connections.',
      'A unique outdoor setting, where participants can enjoy fresh air, good company, and great food while expanding their professional network.'
    ],
    footer: 'Whether you\'re looking to connect with like-minded professionals or just enjoy a day outdoors, IT Connect\'s OpenAirs offer a perfect mix of learning, fun, and community building.',
    photo: 'https://it-conect.notion.site/image/attachment%3A269542f4-7e50-4238-95b4-bc2312c080d2%3ADSC_7172.jpg?table=block&id=18d5addd-450c-80f7-a805-f4c323297c70&spaceId=ba98bd55-74f8-46aa-a976-7248c0b8b835&width=1010&userId=&cache=v2',
  },
  {
    title: 'Parties',
    description: 'IT Connect Parties are vibrant and energetic events where the tech community comes together to relax, celebrate, and have fun. These gatherings offer a chance to unwind after a busy week, make new connections, and enjoy a lively atmosphere. Each party includes:',
    items: [
      'Themed celebrations with music, games, and activities to keep the energy high and the mood fun.',
      'A social environment, perfect for networking, meeting new people, and strengthening relationships within the community.',
      'Unique party formats, from casual hangouts to festive rooftop parties on the beach, offering something for everyone.'
    ],
    footer: 'Whether it’s dancing, chatting over drinks, or enjoying some outdoor fun, IT Connect Parties are the perfect way to connect and celebrate with friends and colleagues.',
    photo: 'https://it-conect.notion.site/image/attachment%3A327c5afa-779d-462f-b1a9-4054ff5b8e9d%3ADSC_9446.jpg?table=block&id=18d5addd-450c-8008-b6e1-cec7c688caa0&spaceId=ba98bd55-74f8-46aa-a976-7248c0b8b835&width=1010&userId=&cache=v2',
  }
];
