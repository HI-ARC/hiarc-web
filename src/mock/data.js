import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'about_photo.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  history: '/history',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'activities_photo.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/hongikuniv.hiarc',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/HI-ARC',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
