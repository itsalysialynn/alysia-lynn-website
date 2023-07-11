import React from 'react';
import { PageProps } from 'gatsby';

import generateHeadTags, { HeadContent } from '../helpers/generateHeadTags';
import Layout from '../templates/Layout';
import AboutMeSection from '../ui/organisms/AboutMeSection';
import EducationSection from '../ui/organisms/EducationSection';
import EmploymentSection from '../ui/organisms/EmploymentSection';

const Home: React.FC<PageProps> = () => (
  <Layout>
    <AboutMeSection />
    <EmploymentSection />
    <EducationSection />
  </Layout>
);

export default Home;

const headContent: HeadContent = {
  description:
    "Hi, I'm Alysia, and I am a web and mobile developer based out of Squamish, BC, Canada.",
  title: 'Home - Alysia Lynn',
};
export const Head = () => generateHeadTags(headContent);
