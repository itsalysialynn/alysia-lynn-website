/* eslint sort-keys: 0 */

export type Breakpoints = {
  mobile: string;
  tablet: string;
  ld: string;
  hd: string;
  uhd: string;
};

export const breakpoints: Breakpoints = {
  mobile: '0px',
  tablet: '600px',
  ld: '1025px',
  hd: '1281px',
  uhd: '1681px',
};

export type MediaQueries = {
  /**
   * (min-width: ${breakpoints.mobile})
   */
  mobile: string;
  /**
   * (min-width: ${breakpoints.tablet})
   */
  tablet: string;
  /**
   * (min-width: ${breakpoints.ld})
   */
  ld: string;
  /**
   * (min-width: ${breakpoints.hd})
   */
  hd: string;
  /**
   * (min-width: ${breakpoints.uhd})
   */
  uhd: string;
};

export const mediaQueries: MediaQueries = {
  mobile: `(min-width: ${breakpoints.mobile})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  ld: `(min-width: ${breakpoints.ld})`,
  hd: `(min-width: ${breakpoints.hd})`,
  uhd: `(min-width: ${breakpoints.uhd})`,
};
