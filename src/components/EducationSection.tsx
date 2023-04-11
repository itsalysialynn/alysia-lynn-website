import React from 'react';
import { MotionAnimate } from 'react-motion-animate';
import styled from 'styled-components';
import widont from 'widont';

import educationHistory from '../data/educationHistory';
import formatYearRange from '../helpers/formatYearRange';
import Card from '../ui/Card';
import ExternalLink from '../ui/ExternalLink';
import Section from '../ui/Section';

const EducationSectionLayout = styled.div`
  display: grid;
  grid-gap: 24px;
`;

const EducationSection = () => (
  <Section id="education">
    <EducationSectionLayout>
      <MotionAnimate animation="fadeInUp" delay={1} distance={50} reset speed={1}>
        <h2>Education</h2>
      </MotionAnimate>
      {educationHistory.map(
        ({ course, courseHref, endYear, school, startYear, description }, index) => (
          <Card
            header={school}
            id={`education-${index.toString()}-card`}
            yearRange={formatYearRange(startYear, endYear)}
          >
            <ExternalLink href={courseHref} text={course} />
            <p>{widont(description)}</p>
          </Card>
        ),
      )}
    </EducationSectionLayout>
  </Section>
);

export default EducationSection;
