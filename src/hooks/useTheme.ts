import { useCallback, useEffect, useState } from 'react';

import ThemeType from '../ui/themes/ThemeType';

const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType>(ThemeType.LIGHT);

  const handleColorSchemeChange = useCallback(
    (event: { matches: any }) =>
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

    return () => {
      window.matchMedia &&
        window
          .matchMedia('(prefers-color-scheme: dark)')
          .removeEventListener('change', handleColorSchemeChange);
    };
  }, [handleColorSchemeChange]);

  return {
    isDarkTheme: theme === ThemeType.DARK,
    theme,
  };
};

export default useTheme;
