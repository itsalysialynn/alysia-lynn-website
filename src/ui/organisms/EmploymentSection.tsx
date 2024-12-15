import React from 'react';
import { styled } from 'styled-components';
import employmentHistory from '../../data/employmentHistory';
import formatYearRange from '../../helpers/formatYearRange';
import Card from '../atoms/Card';
import Section from '../atoms/Section';
import ExternalLink from '../molecules/ExternalLink';

const EmploymentSectionLayout = styled.div`
  display: grid;
  grid-gap: 24px;
`;

const EmploymentSection = () => (
  <Section id="employment">
    <EmploymentSectionLayout>
      <h2>Employment History</h2>
      {employmentHistory.map(
        ({ accomplishments, company, companyHref, endYear, startYear, title }, index) => (
          <Card key={index} header={title} yearRange={formatYearRange(startYear, endYear)}>
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
