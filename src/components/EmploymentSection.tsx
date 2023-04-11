import React from 'react';
import { MotionAnimate } from 'react-motion-animate';
import styled from 'styled-components';

import employmentHistory from '../data/employmentHistory';
import formatYearRange from '../helpers/formatYearRange';
import Card from '../ui/Card';
import ExternalLink from '../ui/ExternalLink';
import Section from '../ui/Section';

const EmploymentSectionLayout = styled.div`
  display: grid;
  grid-gap: 24px;
`;

const EmploymentSection = () => (
  <Section id="employment">
    <EmploymentSectionLayout>
      <MotionAnimate animation="fadeInUp" delay={1} distance={50} reset={true} speed={1}>
        <h2>Employment History</h2>
      </MotionAnimate>
      {employmentHistory.map(
        ({ company, companyHref, endYear, startYear, title, accomplishments }, index) => (
          <Card
            header={title}
            id={`employment-${index.toString()}-card`}
            yearRange={formatYearRange(startYear, endYear)}
          >
            <ExternalLink href={companyHref} text={company} />
            <ul>
              {accomplishments.map((accomplishment, accomplishmentIndex) => (
                <li key={accomplishmentIndex}>{accomplishment}</li>
              ))}
            </ul>
          </Card>
        ),
      )}
    </EmploymentSectionLayout>
  </Section>
);

export default EmploymentSection;