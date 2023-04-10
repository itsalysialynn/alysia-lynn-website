import formatYearRange from './formatYearRange';

describe('formatYearRange', () => {
  it('should only return a single year if the startYear and endYear are the same', () => {
    expect(formatYearRange(2000, 2000)).toEqual('2000');
  });

  it('should seperate startYear and endYear with a dash, if defined', () => {
    expect(formatYearRange(2001, 2019)).toEqual('2001 - 2019');
  });

  it("should seperate startYear and 'Present' with dash, when endYear is undefined", () => {
    expect(formatYearRange(2001, undefined)).toEqual('2001 - Present');
  });
});
