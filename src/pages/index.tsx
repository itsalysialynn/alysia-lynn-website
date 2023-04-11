import React from 'react';
import { PageProps } from 'gatsby';

import AboutMeSection from '../components/AboutMeSection';
import EducationSection from '../components/EducationSection';
import EmploymentSection from '../components/EmploymentSection';
import Layout from '../components/Layout';

const Home: React.FC<PageProps> = () => (
  <Layout
    description="Alysia is a software engineer in British Columbia. I would be happy to discuss your next website or app idea with you. "
    title="Alysia Lynn"
  >
    <AboutMeSection />
    <EmploymentSection />
    <EducationSection />
  </Layout>
);

export default Home;
