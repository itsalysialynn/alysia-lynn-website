import colors from '../constants/colors';

import Theme from './Theme';

const lightTheme: Theme = {
  backgroundColor: colors.slate,
  card: {
    backgroundColor: colors.white,
  },
  color: colors.galaxy,
  hyperlink: {
    active: colors.leaf,
    color: colors.grape,
    hover: colors.grape,
  },
  nav: {
    backgroundColor: colors.white,
  },
  section: {
    borderColor: colors.iron,
  },
};

export default lightTheme;
