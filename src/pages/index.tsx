import React from 'react';
import { PageProps } from 'gatsby';

import AboutMeSection from '../components/AboutMeSection';
import EducationSection from '../components/EducationSection';
import EmploymentSection from '../components/EmploymentSection';
import Layout from '../ui/Layout';

const Home: React.FC<PageProps> = () => (
  <Layout
    description="Hi, I'm Alysia, and I am a web and mobile developer based out of Squamish, British Columbia, Canada. I would be happy to discuss your next website or app idea with you. "
    title="Alysia Lynn"
  >
    <AboutMeSection />
    <EmploymentSection />
    <EducationSection />
  </Layout>
);

export default Home;
