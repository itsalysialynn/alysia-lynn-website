type Employment = {
  accomplishments: string[];
  company: string;
  companyHref: string;
  endYear: number | undefined;
  location: string;
  startYear: number;
  title: string;
};

const employmentHistory: Employment[] = [
  {
    accomplishments: [],
    company: 'Qi Health',
    companyHref: 'https://qi.health/',
    endYear: undefined,
    location: 'Remote',
    startYear: 2025,
    title: 'Founding Software Engineer',
  },
  {
    accomplishments: [
      'Developed a real-time cash flow management tool for Bench`s desktop and mobile app, resulting in an increase in daily active users.',
      'Migrated front-end pipelines from Jenkins to GitHub Actions.',
      'Assisted with the migration of Bench`s bank connection integration from Yodlee to Plaid, providing customers with a more reliable and automated bookkeeping experience.',
      'Built a Gusto integration from front-end to back-end, creating an additional revenue stream for Bench and strengthening our partnership.',
      'Introduced front-end error logging and monitoring, enabling us to catch and fix bugs before they affect many clients.',
      'Mentored several junior and intermediate engineers directly and facilitated department-wide mentorship through code reviews, learning moments, and book clubs.',
      'Fostered a diverse talent pool by attending and organizing meet-ups and participating in interviews for engineering candidates at all levels.',
      'Participated in the front-end technical steering committee that shaped the front-end architecture and direction.',
      'Started and managed an affinity group for marginalized individuals in our technology department.',
    ],
    company: 'Bench Accounting',
    companyHref: 'https://bench.co/',
    endYear: 2025,
    location: 'Vancouver, British Columbia, Canada',
    startYear: 2018,
    title: 'Software Engineer',
  },
  {
    accomplishments: [
      'Provide mentorship to students enrolled in the Lighthouse Labs bootcamp.',
      'Facilitate technical interviews, assess students` understanding of the material, and track their progress.',
    ],
    company: 'Lighthouse Labs',
    companyHref: 'https://www.lighthouselabs.ca/',
    endYear: 2022,
    location: 'Vancouver, British Columbia, Canada',
    startYear: 2020,
    title: 'Web Development Mentor',
  },
  {
    accomplishments: [
      'Assisted in converting legacy CoffeeScript React components to ES6.',
      'Participated in project planning and peer code reviews.',
      'Was responsible for the complete redesign of the website and app.',
      'Implemented Jest, Cucumber, and RSpec tests.',
      'Developed features from start to finish in an Agile environment.',
      'Was responsible for the web app`s design, mobile functionality, and UX/UI.',
    ],
    company: 'Loft 47',
    companyHref: 'https://www.loft47.com/',
    endYear: 2018,
    location: 'Vancouver, British Columbia, Canada',
    startYear: 2017,
    title: 'Software Developer',
  },
];

export default employmentHistory;
