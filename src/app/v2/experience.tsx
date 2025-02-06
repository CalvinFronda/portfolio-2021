import workStep from '../../assets/images/workstep_logo.jpeg';
import omou from '../../assets/images/omou_learning.jpeg';
import apple from '../../assets/images/apple_logo.jpeg';
export const experience = [
  {
    title: 'WorkStep',
    description: [
      `Leveraged generative AI and OpenAI’s large language models for user sentiment classification and
analysis, allowing the managers on our product to gain deep, real-time insights into the health of their
team and workforce.`,
      `Drove organization-wide architectural and infrastructure decisions across engineering and product; by
spearheading TypeScript adoption and building reusable design systems and core components, we were
able to streamline development and increase feature delivery speed by >20%.`,
      `Optimized our TTI and page load speeds by >30% through a re-architecting and refactoring of our user-
facing product, moving numerous compute-heavy operations from our legacy React/Redux frontend into

a new Python backend interfaced via GraphQL.`,
    ],
    role: 'Software Engineer',
    tags: {
      FrontEnd: [
        'React',
        'Typescript',
        'Redux',
        'Retool',
        'Recharts',
        'MUI',
        'Storybook',
        'less',
      ],
      Backend: ['Python', 'PonyORM', 'Relay', 'GraphQL', 'SQL', 'Strawberry'],
      DevOps: [
        'Docker',
        'GCP',
        'AWS',
        'Github',
        'NewRelic',
        'LaunchDarkly',
        'Okta',
        'SquadCast',
        'Twilio',
      ],
      Basic: ['React', 'Typescript', 'Python', 'SQL', 'GraphQL', 'Redux'],
    },
    dates: ['12/2021', '11/2024'],
    image: workStep,
    link: 'https://www.workstep.com/',
  },
  {
    title: 'Omou',
    description: [
      `Founding engineer at EdTech company helping to empower student learning by
bridging the technological gap between students, teachers, and mentors`,
      `Built many of the fundamental features across the frontend and backend;
primarily in Javascript, React, Graphql, Apollo, and Python Django`,
      `Developed calendaring tools, the accounts and permissions systems, the
marketing website, and several other projects; drove projects end-to-end
primarily with React on the frontend, GraphQL queries to a Python backend, and
pulled data from a Django Postgres database integration`,
    ],
    role: 'Founding Software Engineer',
    tags: {
      FrontEnd: [
        'React',
        'Javascript',
        'Redux',
        'MUI',
        'Apollo',
        'Storybook',
        'sass',
      ],
      Backend: ['Python', 'Django', 'Graphene', 'GraphQL', 'pandas', 'SQL'],
      DevOps: ['Docker', 'AWS', 'Github', 'Stripe', 'twilio'],
      Basic: [
        'React',
        'Javascript',
        'Python',
        'SQL',
        'GraphQL',
        'Redux',
        'Django',
      ],
    },
    dates: ['7/2019', '01/2022'],
    image: omou,
    link: 'https://www.linkedin.com/company/omou-learning/',
  },
  {
    title: 'Apple',
    description: [
      `Built an API validation service that drastically improved productivity and
communication between frontend and backend team`,
      `Implemented a React application that provided engineers with API testing tools,
deep schema validation, and integrations with core apple infrastructure for over
30 different internal endpoint`,
      ` Drove initial design and requirements planning, working closely with key
stakeholders from frontend and backend teams`,
      `Shipped MVP of product in first two weeks of internship and built a tight
feedback loop with target users to iterate on functionality and usability`,
      `Presented project to org director and received overwhelmingly positive feedback
on the implementation and impact of the project`,
    ],
    role: 'Software Engineer Intern',
    tags: {
      FrontEnd: ['React', 'Javascript', 'Typescript', 'Redux'],
      Backend: ['Node.js'],
      DevOps: ['Docker', 'Box'],
      Basic: ['React', 'Typescript', 'Javascript', 'Node.js'],
    },
    dates: ['02/2021', '06/2021'],
    image: apple,
    link: 'https://www.apple.com/',
  },
];
