import { useCallback, useEffect, useState } from 'react';

import ThemeType from '../ui/themes/ThemeType';
import darkTheme from '../ui/themes/darkTheme';
import lightTheme from '../ui/themes/lightTheme';

const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType>(ThemeType.LIGHT);

  const handleColorSchemeChange = useCallback(
    (event: MediaQueryListEvent) =>
      event.matches ? setTheme(ThemeType.DARK) : setTheme(ThemeType.LIGHT),
    [],
  );

  useEffect(() => {
    const systemDarkMode =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(systemDarkMode ? ThemeType.DARK : ThemeType.LIGHT);
  }, []);

  useEffect(() => {
    window.matchMedia &&
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', handleColorSchemeChange);

    return () =>
      window.matchMedia &&
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', handleColorSchemeChange);
  }, [handleColorSchemeChange]);

  const isDarkTheme = theme === ThemeType.DARK;

  return {
    isDarkTheme,
    theme: isDarkTheme ? darkTheme : lightTheme,
  };
};

export default useTheme;
