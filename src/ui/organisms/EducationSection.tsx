import React from 'react';
import styled from 'styled-components';
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
);

export default EducationSection;
