import colors from '../constants/colors';
import { Theme } from './types';

const lightTheme: Theme = {
  backgroundColor: colors.slate,
  color: colors.galaxy,
  hyperlink: {
    color: colors.grape,
    active: colors.leaf,
    hover: colors.grape,
  },
  nav: {
    backgroundColor: colors.white,
  },
  section: {
    borderColor: colors.iron,
  },
  card: {
    backgroundColor: colors.white,
  },
};

export default lightTheme;
