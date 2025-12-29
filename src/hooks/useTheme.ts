import { useSyncExternalStore } from 'react';
import darkTheme from '../ui/themes/darkTheme';
import lightTheme from '../ui/themes/lightTheme';
import ThemeType from '../ui/themes/ThemeType';

const getSystemTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? ThemeType.DARK
    : ThemeType.LIGHT;
};

const subscribeToThemeChanges = (callback: () => void) => {
  const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQueryList.addEventListener('change', callback);
  return () => {
    mediaQueryList.removeEventListener('change', callback);
  };
};

const getServerSnapshot = () => ThemeType.LIGHT;

const useTheme = () => {
  const theme = useSyncExternalStore(subscribeToThemeChanges, getSystemTheme, getServerSnapshot);

  const isDarkTheme = theme === ThemeType.DARK;

  return {
    isDarkTheme,
    theme: isDarkTheme ? darkTheme : lightTheme,
  };
};

export default useTheme;
