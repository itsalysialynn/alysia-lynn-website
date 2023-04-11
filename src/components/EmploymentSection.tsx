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
      <h2>Employment History</h2>
      {employmentHistory.map(
        ({ company, companyHref, endYear, startYear, title, accomplishments }, index) => (
          <MotionAnimate
            key={index}
            animation="fade"
            delay={0.5}
            distance={100}
            reset={false}
            speed={1}
          >
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
          </MotionAnimate>
        ),
      )}
    </EmploymentSectionLayout>
  </Section>
);

export default EmploymentSection;
