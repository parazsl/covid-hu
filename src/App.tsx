import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Header } from 'components/Header';
import { Themes } from 'utils/getDefaultTheme';
import { ThemeContext } from 'contexts/ThemeContext';

import { darkTheme, lightTheme } from 'styles/themes';
import { GlobalStyles } from 'styles/global';

export const App = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <ThemeProvider theme={theme === Themes.DARK ? darkTheme : lightTheme}>
          <GlobalStyles />
          <Header />
        </ThemeProvider>
      )}
    </ThemeContext.Consumer>
  );
};
