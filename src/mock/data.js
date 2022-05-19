/* eslint-disable prettier/prettier */
import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Allohaa', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Allohaa.. I am',
  name: 'Randy Wiratama',
  subtitle: "I'm a Web Developer",
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
    url: 'https://github.com/RandyWiratamaa/penjualan',
    repo: 'https://github.com/RandyWiratamaa/penjualan', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'farmasi.jpg',
    title: 'Aplikasi Farmasi',
    info: 'Web Based Laravel Framework',
    info2: '',
    url: 'https://github.com/RandyWiratamaa/farmasi',
    repo: 'https://github.com/RandyWiratamaa/farmasi', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mini-market.png',
    title: 'Aplikasi Mini Market',
    info: 'Web Based Laravel Framework',
    info2: '',
    url: 'https://github.com/RandyWiratamaa/mini-market',
    repo: 'https://github.com/RandyWiratamaa/mini-market', // if no repo, the button will not show up
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
      url: 'https://linkedin.com/in/randy-wiratama-97096b192',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/RandyWira',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
