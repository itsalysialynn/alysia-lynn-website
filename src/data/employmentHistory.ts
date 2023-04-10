type Skill = {
  icon: string;
  name: string;
};

export type Employment = {
  accomplishments: string[];
  company: string;
  companyHref: string;
  endYear: number | undefined;
  location: string;
  logoFile: string;
  skills: Skill[];
  startYear: number;
  title: string;
};

const employmentHistory: Employment[] = [
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
    endYear: undefined,
    location: 'Vancouver, British Columbia, Canada',
    logoFile: 'bench-logo.png',
    skills: [
      { icon: '', name: 'Amazon Web Services' },
      { icon: '', name: 'AngularJS' },
      { icon: '', name: 'CSS' },
      { icon: '', name: 'GitHub Actions' },
      { icon: '', name: 'Go' },
      { icon: '', name: 'GraphQL' },
      { icon: '', name: 'Java' },
      { icon: '', name: 'Mentorship' },
      { icon: '', name: 'React Native' },
      { icon: '', name: 'React' },
      { icon: '', name: 'Scala' },
      { icon: '', name: 'Typescript' },
    ],
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
    logoFile: 'lighthouse-logo.png',
    skills: [
      { icon: '', name: 'CSS' },
      { icon: '', name: 'Javascript' },
      { icon: '', name: 'Mentorship' },
      { icon: '', name: 'React' },
      { icon: '', name: 'Relational Database Design' },
      { icon: '', name: 'Ruby on Rails' },
      { icon: '', name: 'Ruby' },
    ],
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
    logoFile: 'loft-logo.png',
    skills: [
      { icon: '', name: 'React' },
      { icon: '', name: 'CoffeeScript' },
      { icon: '', name: 'Jest' },
      { icon: '', name: 'CSS' },
      { icon: '', name: 'Heroku' },
      { icon: '', name: 'Javascript' },
      { icon: '', name: 'Ruby on Rails' },
    ],
    startYear: 2017,
    title: 'Software Developer',
  },
  {
    accomplishments: [
      'Answered inquiries via phone, live chat, and email.',
      'Managed clients` accounts during their trial period and ensured top-level customer service.',
      'Discussed complex bookkeeping and tax needs with clients to develop strategic solutions.',
      'Exceeded monthly sales quota.',
      'Contributed to th`e ongoing learning and success of the team through mentorship, collaboration, and training.',
    ],
    company: 'Bench Accounting',
    companyHref: 'https://bench.co/',
    endYear: 2017,
    location: 'Vancouver, British Columbia, Canada',
    logoFile: 'bench-logo.png',
    skills: [
      { icon: '', name: 'Sales' },
      { icon: '', name: 'Coaching' },
      { icon: '', name: 'Customer Service' },
    ],
    startYear: 2015,
    title: 'Onboarding Specialist',
  },
  {
    accomplishments: [
      'Provided top-level customer service to Shaw`s valued phone, television, hosting, and internet clients.',
      'Supported business subscribers with technical concerns via phone, email, and live chat.',
      'Assisted with supervisor telephone escalations and provided resolutions to complex issues with empathy and understanding.',
      'Coordinated with the business`s IT department to resolve complex technical issues.',
      'Acted as a liaison between customers and Shaw`s installation technicians.',
      'Coordinated with maintenance technicians to communicate service outages to clients.',
    ],
    company: 'Shaw Communications',
    companyHref: 'https://www.shaw.ca/',
    endYear: 2015,
    location: 'Vancouver, British Columbia, Canada',
    logoFile: 'shaw-logo.png',
    skills: [
      { icon: '', name: 'Networking' },
      { icon: '', name: 'Cisco' },
      { icon: '', name: 'Web Hosting' },
    ],
    startYear: 2013,
    title: 'Business Technical Support',
  },
  {
    accomplishments: [
      'Provided telephone support to subscribers of phone, television, and internet services.',
      'Explained complicated technical information using language that clients can easily understand.',
    ],
    company: 'Shaw Communications',
    companyHref: 'https://www.shaw.ca/',
    endYear: 2013,
    location: 'Vancouver, British Columbia, Canada',
    logoFile: 'shaw-logo.png',
    skills: [
      { icon: '', name: 'Networking' },
      { icon: '', name: 'Cisco' },
    ],
    startYear: 2012,
    title: 'Residential Technical Support',
  },
  {
    accomplishments: [
      'Provided telephone support to satellite TV subscribers.',
      'Assisted with beta testing new software and hardware.',
    ],
    company: 'Shaw Communications',
    companyHref: 'https://www.shaw.ca/',
    endYear: 2012,
    location: 'Calgary, Alberta, Canada',
    logoFile: 'shaw-logo.png',

    skills: [
      { icon: '', name: 'Networking' },
      { icon: '', name: 'Cisco' },
    ],
    startYear: 2008,
    title: 'Residential Technical Support',
  },
  {
    accomplishments: [
      'Provided desktop, laptop, and wireless hardware support to Apple customers over the phone.',
      'Consulted with Apple-certified technicians to resolve clients` complex and ongoing issues.',
    ],
    company: 'Apple',
    companyHref: 'https://www.apple.com/',
    endYear: 2012,
    location: 'Saskatoon, Saskatchewan, Canada',
    logoFile: 'apple-logo.png',
    skills: [
      { icon: '', name: 'Apple Software' },
      { icon: '', name: 'Wireless Networking' },
      { icon: '', name: 'Customer Service' },
    ],
    startYear: 2008,
    title: 'Technical Support',
  },
];

export default employmentHistory;
