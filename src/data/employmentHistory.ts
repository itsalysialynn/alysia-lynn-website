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
    company: 'Bench Accounting',
    logoFile: 'bench-logo.png',
    companyHref: 'https://bench.co/',
    title: 'Software Engineer',
    location: 'Vancouver, British Columbia, Canada',
    startYear: 2018,
    endYear: undefined,
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
    skills: [
      { name: 'Mentorship', icon: '' },
      { name: 'Amazon Web Services', icon: '' },
      { name: 'Go', icon: '' },
      { name: 'Java', icon: '' },
      { name: 'AngularJS', icon: '' },
      { name: 'CSS', icon: '' },
      { name: 'GitHub Actions', icon: '' },
      { name: 'React', icon: '' },
      { name: 'React Native', icon: '' },
      { name: 'Scala', icon: '' },
      { name: 'Typescript', icon: '' },
      { name: 'GraphQL', icon: '' },
    ],
  },
  {
    company: 'Lighthouse Labs',
    logoFile: 'lighthouse-logo.png',
    companyHref: 'https://www.lighthouselabs.ca/',
    title: 'Web Development Mentor',
    location: 'Vancouver, British Columbia, Canada',
    startYear: 2020,
    endYear: 2022,
    accomplishments: [
      'Provide mentorship to students enrolled in the Lighthouse Labs bootcamp.',
      'Facilitate technical interviews, assess students` understanding of the material, and track their progress.',
    ],
    skills: [
      { name: 'Mentorship', icon: '' },
      { name: 'Relational Database Design', icon: '' },
      { name: 'CSS', icon: '' },
      { name: 'Javascript', icon: '' },
      { name: 'React', icon: '' },
      { name: 'Ruby', icon: '' },
      { name: 'Ruby on Rails', icon: '' },
    ],
  },
  {
    company: 'Loft 47',
    logoFile: 'loft-logo.png',
    companyHref: 'https://www.loft47.com/',
    title: 'Software Developer',
    location: 'Vancouver, British Columbia, Canada',
    startYear: 2017,
    endYear: 2018,
    accomplishments: [
      'Assisted in converting legacy CoffeeScript React components to ES6.',
      'Participated in project planning and peer code reviews.',
      'Was responsible for the complete redesign of the website and app.',
      'Implemented Jest, Cucumber, and RSpec tests.',
      'Developed features from start to finish in an Agile environment.',
      'Was responsible for the web app`s design, mobile functionality, and UX/UI.',
    ],
    skills: [
      { name: 'React', icon: '' },
      { name: 'CoffeeScript', icon: '' },
      { name: 'Jest', icon: '' },
      { name: 'CSS', icon: '' },
      { name: 'Heroku', icon: '' },
      { name: 'Javascript', icon: '' },
      { name: 'Ruby on Rails', icon: '' },
    ],
  },
  {
    company: 'Bench Accounting',
    companyHref: 'https://bench.co/',
    logoFile: 'bench-logo.png',
    title: 'Onboarding Specialist',
    location: 'Vancouver, British Columbia, Canada',
    startYear: 2015,
    endYear: 2017,
    accomplishments: [
      'Answered inquiries via phone, live chat, and email.',
      'Managed clients` accounts during their trial period and ensured top-level customer service.',
      'Discussed complex bookkeeping and tax needs with clients to develop strategic solutions.',
      'Exceeded monthly sales quota.',
      'Contributed to th`e ongoing learning and success of the team through mentorship, collaboration, and training.',
    ],
    skills: [
      { name: 'Sales', icon: '' },
      { name: 'Coaching', icon: '' },
      { name: 'Customer Service', icon: '' },
    ],
  },
  {
    company: 'Shaw Communications',
    companyHref: 'https://www.shaw.ca/',
    logoFile: 'shaw-logo.png',
    title: 'Business Technical Support',
    location: 'Vancouver, British Columbia, Canada',
    startYear: 2013,
    endYear: 2015,
    accomplishments: [
      'Provided top-level customer service to Shaw`s valued phone, television, hosting, and internet clients.',
      'Supported business subscribers with technical concerns via phone, email, and live chat.',
      'Assisted with supervisor telephone escalations and provided resolutions to complex issues with empathy and understanding.',
      'Coordinated with the business`s IT department to resolve complex technical issues.',
      'Acted as a liaison between customers and Shaw`s installation technicians.',
      'Coordinated with maintenance technicians to communicate service outages to clients.',
    ],
    skills: [
      { name: 'Networking', icon: '' },
      { name: 'Cisco', icon: '' },
      { name: 'Web Hosting', icon: '' },
    ],
  },
  {
    company: 'Shaw Communications',
    companyHref: 'https://www.shaw.ca/',
    logoFile: 'shaw-logo.png',
    title: 'Residential Technical Support',
    location: 'Vancouver, British Columbia, Canada',
    startYear: 2012,
    endYear: 2013,
    accomplishments: [
      'Provided telephone support to subscribers of phone, television, and internet services.',
      'Explained complicated technical information using language that clients can easily understand.',
    ],
    skills: [
      { name: 'Networking', icon: '' },
      { name: 'Cisco', icon: '' },
    ],
  },
  {
    company: 'Shaw Communications',
    companyHref: 'https://www.shaw.ca/',
    logoFile: 'shaw-logo.png',
    title: 'Residential Technical Support',
    location: 'Calgary, Alberta, Canada',
    startYear: 2008,
    endYear: 2012,
    accomplishments: [
      'Provided telephone support to satellite TV subscribers.',
      'Assisted with beta testing new software and hardware.',
    ],
    skills: [
      { name: 'Networking', icon: '' },
      { name: 'Cisco', icon: '' },
    ],
  },
  {
    company: 'Apple',
    companyHref: 'https://www.apple.com/',
    logoFile: 'apple-logo.png',
    title: 'Technical Support',
    location: 'Saskatoon, Saskatchewan, Canada',
    startYear: 2008,
    endYear: 2012,
    accomplishments: [
      'Provided desktop, laptop, and wireless hardware support to Apple customers over the phone.',
      'Consulted with Apple-certified technicians to resolve clients` complex and ongoing issues.',
    ],
    skills: [
      { name: 'Apple Software', icon: '' },
      { name: 'Wireless Networking', icon: '' },
      { name: 'Customer Service', icon: '' },
    ],
  },
];

export default employmentHistory;
