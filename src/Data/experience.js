export const ExperienceData = [
  {
    company: 'Deloitte',
    role: 'Software Engineer 1',
    period: 'July 2024 — Present',
    location: 'Hybrid',
    logo: '../imgs/deloitte.png',
    summary:
      'Working across the design system, dashboard, and marketing surfaces. Ownership of the component library and the customer-facing analytics UI.',
    projects: [
      {
        name: 'Customer Analytics Dashboard',
        description:
          'Rebuilt the analytics dashboard from scratch. Introduced virtualized tables, streamed responses, and a new chart primitive used by 40k+ monthly users. Cut initial load from 4.2s to 1.6s.',
        stack: [
          'React',
          'TypeScript',
          'TanStack Query',
          'Recharts',
          'Tailwind',
        ],
        link: '#',
      },
      {
        name: 'Design System v2',
        description:
          'Migrated 60+ components to a token-driven system with dark-mode parity, tree-shakeable exports, and typed variant APIs. Adopted across three product teams.',
        stack: ['React', 'Radix', 'CVA', 'Storybook'],
        link: '#',
      },
      {
        name: 'Marketing Site Rewrite',
        description:
          'Led the rewrite of the public marketing site. Perfect Lighthouse scores, content-driven MDX pipeline, and animation system built on Framer Motion.',
        stack: ['Next.js', 'MDX', 'Framer Motion'],
      },
    ],
  },
];
