import colors from '../constants/colors';
import { Theme } from './types';

const darkTheme: Theme = {
  backgroundColor: colors.night,
  color: colors.snow,
  hyperlink: {
    color: colors.leaf,
    active: colors.grape,
    hover: colors.leaf,
  },
  nav: {
    backgroundColor: colors.onyx,
  },
  section: {
    borderColor: colors.onyx,
  },
  card: {
    backgroundColor: colors.onyx,
  },
};

export default darkTheme;
