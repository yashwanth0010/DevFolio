export const ExperienceData = [
  {
    company: 'Deloitte',
    role: 'Frontend Developer Intern',
    period: 'Jun 2024 — Present',
    location: 'Remote',
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
  {
    company: 'Open Source',
    role: 'Contributor',
    period: '2023 — 2024',
    location: 'GitHub',
    summary:
      'Regular contributor to component libraries and developer tooling. Focus on accessibility, TypeScript typings, and animation utilities.',
    projects: [
      {
        name: 'a11y Fixes to shadcn/ui',
        description:
          'Landed several accessibility fixes around focus management, keyboard traps in dialogs, and screen-reader labels on interactive primitives.',
        stack: ['React', 'Radix', 'a11y'],
        link: '#',
      },
      {
        name: 'Framer Motion Typings',
        description:
          'Contributed stricter TypeScript typings for variants and transition props. Cut down false-positive editor errors in downstream consumers.',
        stack: ['TypeScript', 'Framer Motion'],
      },
    ],
  },
  {
    company: 'Freelance',
    role: 'Web Developer',
    period: '2022 — 2023',
    location: 'India',
    summary:
      'Designed and shipped marketing sites, portfolios, and small SaaS front-ends for early-stage founders. Focus on performance and brand-forward UI.',
    projects: [
      {
        name: 'Founder Portfolios',
        description:
          'Built five bespoke portfolios for founders and creators. Each with a distinct visual identity, custom animations, and a CMS-backed content model.',
        stack: ['Next.js', 'Sanity', 'Tailwind'],
      },
      {
        name: 'SaaS Landing Kits',
        description:
          'Delivered production-ready landing page kits with pricing, feature grids, and testimonial modules. Used by two YC-backed startups at launch.',
        stack: ['Next.js', 'Tailwind', 'Framer Motion'],
      },
    ],
  },
];
