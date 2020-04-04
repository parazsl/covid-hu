import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Header } from './components/Header';
import { Button } from './components/Button';
import { getDefaultTheme, Themes } from './utils/getDefaultTheme';

import { darkTheme, lightTheme } from './styles/themes';
import { GlobalStyles } from './styles/global';

const defaultTheme = getDefaultTheme();

const App = () => {
  const [theme, setTheme] = useState(defaultTheme);

  const switchTheme = () => {
    const newTheme = theme === Themes.DARK ? Themes.LIGHT : Themes.DARK;
    setTheme(newTheme);
  };

  return (
    <ThemeProvider theme={theme === Themes.DARK ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header />
      <Button onClick={switchTheme} title="Switch theme" />
    </ThemeProvider>
  );
};

export default App;
