import React from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from './styles/themes';
import { GlobalStyles } from './styles/global';

const defaultTheme = matchMedia('(prefers-color-scheme: dark)').matches
  ? darkTheme
  : lightTheme;

console.log(defaultTheme);

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <div className="App">COVID-19 stats - Hungary</div>
    </ThemeProvider>
  );
};

export default App;
