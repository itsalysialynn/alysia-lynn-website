import colors from '../constants/colors';

import Theme from './Theme';

const darkTheme: Theme = {
  backgroundColor: colors.night,
  card: {
    backgroundColor: colors.onyx,
  },
  color: colors.snow,
  hyperlink: {
    active: colors.grape,
    color: colors.sunrise,
    hover: colors.sunrise,
  },
  nav: {
    backgroundColor: colors.onyx,
    hyperlink: {
      color: colors.white,
      hover: colors.snow,
    },
  },
  section: {
    borderColor: colors.onyx,
  },
};

export default darkTheme;
