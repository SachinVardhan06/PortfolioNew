import Link from 'next/link';

import { buttonVariants } from '@/components/button';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/AceNoto.png',
    title: 'ACE NOTO',
    description:
      'A comprehensive educational platform built with React.js and Django, featuring secure JWT-based authentication, PostgreSQL integration, and Razorpay-powered premium subscriptions for study resources.',
    technologies: ['React.js', 'Django', 'PostgreSQL', 'JWT', 'Tailwind CSS'],
    links: {
      preview: 'https://acenoto.tech/',
      github: 'https://github.com/SachinVardhan06/NOTO_FRONTEND',
      githubApi: 'https://api.github.com/repos/SachinVardhan06/NOTO_FRONTEND',
    },
  },
  {
    image: '/images/Holaholacar.png',
    title: 'HolaHolaCar',
    description:
      'A feature-rich carpooling platform combining React.js and Django with Mapbox API integration for intelligent location recommendations and optimized ride-sharing workflows.',
    technologies: ['React.js', 'Django', 'JavaScript', 'Mapbox API'],
    links: {
      preview: 'https://holaholacar.in.net/',
      github: 'https://github.com/SachinVardhan06/HolaHolaCarFrontend',
      githubApi: 'https://api.github.com/repos/SachinVardhan06/HolaHolaCar',
    },
  },
  {
    image: '/images/Templesofbharat.png',
    title: 'Temples Of Bharat',
    description:
      'A cross-platform mobile app built using Flutter and Dart, showcasing a curated database of Indian temples with historical details and images. Deployed on the Amazon Appstore.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps'],
    links: {
      preview: 'https://www.amazon.com/dp/B0CLKVNV8F/',
      github: 'https://www.amazon.com/dp/B0CLKVNV8F/', // optional — no GitHub link mentioned in resume
      githubApi: '',
    },
  },
] as const;


export const experiencesData = [
  {
    title: 'Frontend Developer',
    company: 'Outlier AI, remote',
    description:
      'At Outlier AI, I designed and developed responsive user interfaces using React and TypeScript. Focused on building reusable, scalable components and collaborated closely with designers and backend developers to ensure a seamless, consistent user experience.',
    period: 'Mar 2025 – Apr 2025',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  },
] as const;


export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;
