import Link from 'next/link';

import { buttonVariants } from '@/components/button';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { projectsData } from './projects-data';

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

export const experiencesData = [
  {
    title: 'Frontend Developer',
    company: 'Company Name',
    period: '2022 - Present',
    description:
      'Working on various projects using React, Next.js, TypeScript, and Tailwind CSS.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Company Name',
    period: '2021 - 2022',
    description:
      'Worked on various projects using React, Next.js, TypeScript, and Tailwind CSS.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
] as const;

export const skillsData = [
  {
    icon: <Icons.html className="size-16" />,
  },
  {
    icon: <Icons.css className="size-16" />,
  },
  {
    icon: <Icons.nextjs className="size-16" />,
  },
  {
    icon: <Icons.github className="size-16" />,
  },
  {
    icon: <Icons.linkedin className="size-16" />,
  },
];

export { projectsData };
