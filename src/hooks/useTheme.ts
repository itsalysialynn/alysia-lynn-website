import React, { useCallback, useEffect, useState } from 'react';
import darkTheme from '../ui/themes/darkTheme';
import lightTheme from '../ui/themes/lightTheme';
import ThemeType from '../ui/themes/ThemeType';

const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType>(ThemeType.LIGHT);

  const handleColorSchemeChange = useCallback((event: MediaQueryListEvent) => {
    setTheme(event.matches ? ThemeType.DARK : ThemeType.LIGHT);
  }, []);

  useEffect(() => {
    const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(systemDarkMode ? ThemeType.DARK : ThemeType.LIGHT);
  }, []);

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQueryList.addEventListener('change', handleColorSchemeChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleColorSchemeChange);
    };
  }, [handleColorSchemeChange]);

  const isDarkTheme = theme === ThemeType.DARK;

  return {
    isDarkTheme,
    theme: isDarkTheme ? darkTheme : lightTheme,
  };
};

export default useTheme;
