const metadata = {
  nextjs: {
    version: {
      name: '1.0',
      date: 'February 5, 2023',
      datetime: '2023-02-05'
    },
    description: [
      `NextJs is a powerful framework for building fullstack React applications. It makes it easy to create fast, SEO-friendly websites and web applications that are optimized for performance.`,
      `I'll teach you everything from the basics of setting up a NextJs project to advanced techniques like server-side rendering, code splitting, and optimizing performance.`,
      `The course will launch by the end of March 2023. Sign up now to get notified and take the first step towards becoming a NextJs expert 👇🏼`
    ],
    callToAction: [
      `If you've already made up your mind, you can pre-order the course now for $99 — the regular price would be $149.`
    ],
    highlights: [
      'Learn everything from the basics to advanced concepts',
      'Hours of high-quality video content',
      'Build a Portfolio using MDX (markdown)',
      'Build an e-commerce site using Swell and Stripe',
      'Build a marketing website using a Headless CMS'
    ],
    techStack: [
      'TailwindCSS (styling)',
      'Framer motion (animation)',
      'Prisma (type safe ORM)',
      'MongoDB (document database)',
      'Auth.js (authentication)',
      'Prismic (headless CMS)',
      'MDX (markdown)',
      'Stripe (payments)',
      'Swell (ecommerce)'
    ],
    modules: [
      'Getting started, why React, why NextJs',
      'JavaScript refresher',
      'React hooks',
      'Routing',
      'Data fetching and page rendering strategies',
      'NextJs Link, Image, and Font component',
      'API Routes',
      'Authentication',
      'Custom App and Document',
      'TypeScript',
      'Introduction to tRPC',
      'Deploying your NextJs app',
      'Bonus: Introduction to NextJs 13 app directory'
    ],
    faqs: [
      {
        question: 'When will the course be ready?',
        answer: 'The estimated launch date is end of March 2023.'
      },
      {
        question: 'What format is the course material?',
        answer: 'The course is in video format.'
      }
    ]
  }
}

export function getCourseMetadata(slug) {
  return metadata[slug]
}
