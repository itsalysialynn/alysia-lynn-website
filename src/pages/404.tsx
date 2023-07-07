import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../templates/Layout';
import Section from '../ui/atoms/Section';

const NotFoundSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 64px 0;
`;

const NotFoundPage = () => (
  <Layout robotMetaContent="noindex, nofollow" title="Not Found | Alysia Lynn">
    <NotFoundSection>
      <h1>This page is not found</h1>
      <Link to="/">Go Home</Link>
    </NotFoundSection>
  </Layout>
);

export default NotFoundPage;
