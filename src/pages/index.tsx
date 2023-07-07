import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '../templates/Layout';
import AboutMeSection from '../ui/organisms/AboutMeSection';
import EducationSection from '../ui/organisms/EducationSection';
import EmploymentSection from '../ui/organisms/EmploymentSection';

const Home: React.FC<PageProps> = () => (
  <Layout title="Home - Alysia Lynn">
    <AboutMeSection />
    <EmploymentSection />
    <EducationSection />
  </Layout>
);

export default Home;
