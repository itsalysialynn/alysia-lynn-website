import React from 'react';
import styled from 'styled-components';

import employmentHistory from '../data/employmentHistory';
import formatYearRange from '../helpers/formatYearRange';
import Card from '../ui/Card';
import ExternalLink from '../ui/ExternalLink';
import Section from '../ui/Section';

const EmploymentSectionLayout = styled.div`
  display: grid;
  grid-gap: 16px;
`;

const EmploymentSection = () => (
  <Section>
    <h3>Employment</h3>
    <EmploymentSectionLayout>
      {employmentHistory.map(
        ({ company, companyHref, endYear, startYear, title, accomplishments }, index) => (
          <Card
            key={index}
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
