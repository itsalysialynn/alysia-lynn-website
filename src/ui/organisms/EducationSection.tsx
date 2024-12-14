import React from 'react';
import { styled } from 'styled-components';
import widont from 'widont';
import educationHistory from '../../data/educationHistory';
import formatYearRange from '../../helpers/formatYearRange';
import Card from '../atoms/Card';
import ExternalLink from '../molecules/ExternalLink';

const EducationSectionLayout = styled.div`
  display: grid;
  grid-gap: 24px;
`;

const EducationSection = () => (
  <EducationSectionLayout id="education">
    <h2>Education</h2>
    {educationHistory.map(
      ({ course, courseHref, description, endYear, school, startYear }, index) => (
        <Card key={index} header={school} yearRange={formatYearRange(startYear, endYear)}>
          <ExternalLink href={courseHref} text={course} />
          <p>{widont(description)}</p>
        </Card>
      ),
    )}
  </EducationSectionLayout>
);

export default EducationSection;
