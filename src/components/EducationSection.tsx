import React from 'react';
import styled from 'styled-components';
import widont from 'widont';

import educationHistory, { Education } from '../data/educationHistory';
import formatYearRange from '../helpers/formatYearRange';
import Card from '../ui/Card';
import ExternalLink from '../ui/ExternalLink';
import Section from '../ui/Section';

const EducationSectionLayout = styled.div`
  display: grid;
  grid-gap: 16px;
`;

const EducationSection = () => (
  <Section>
    <h3>Education</h3>
    <EducationSectionLayout>
      {educationHistory.map(
        ({ course, courseHref, endYear, school, startYear, description }: Education, index) => (
          <Card
            key={index}
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
