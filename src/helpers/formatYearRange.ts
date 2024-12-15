const formatYearRange = (startYear: number, endYear: number | undefined): string => {
  if (!endYear) {
    return `${startYear.toString()} - Present`;
  }
  if (startYear === endYear) {
    return endYear.toString();
  }
  return `${startYear.toString()} - ${endYear.toString()}`;
};

export default formatYearRange;
