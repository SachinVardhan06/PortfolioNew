/* eslint-disable simple-import-sort/imports */
import { Icons } from '@/components/icons';
// Local imports
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
    company: 'Outlier AI, remote',
    description:
      'At Outlier AI, I designed and developed responsive user interfaces using React and TypeScript. Focused on building reusable, scalable components and collaborated closely with designers and backend developers to ensure a seamless, consistent user experience.',
    period: 'Mar 2025 – Apr 2025',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
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
