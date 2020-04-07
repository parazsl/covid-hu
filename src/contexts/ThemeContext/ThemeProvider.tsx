import React, { useState, FC } from 'react';

import { getDefaultTheme, Themes } from 'utils/getDefaultTheme';
import { ThemeContext } from './';

export const ThemeProvider: FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(getDefaultTheme());

  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        toggleTheme: () =>
          setCurrentTheme(
            currentTheme === Themes.DARK ? Themes.LIGHT : Themes.DARK
          ),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
