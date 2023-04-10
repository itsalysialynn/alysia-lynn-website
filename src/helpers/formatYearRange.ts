const formatYearRange = (startYear: number, endYear: number | undefined): string => {
  if (!endYear) {
    return `${startYear} - Present`;
  }
  if (startYear === endYear) {
    return endYear.toString();
  }
  return `${startYear} - ${endYear}`;
};

export default formatYearRange;
