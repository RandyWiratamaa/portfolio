/* eslint-disable prettier/prettier */
import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'My Portfolio',
  name: 'Randy Wiratama',
  subtitle: 'I am Pull Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'grosir.jpg',
    title: 'Aplikasi Penjualan',
    info: 'Web Based CodeIgniter Framework',
    info2: '',
    url: 'https://github.com/RandyWira/penjualan',
    repo: 'https://github.com/RandyWira/penjualan', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'farmasi.jpg',
    title: 'Aplikasi Farmasi',
    info: 'Web Based Laravel Framework',
    info2: '',
    url: 'https://github.com/RandyWira/farmasi',
    repo: 'https://github.com/RandyWira/farmasi', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'randywiratama1@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
