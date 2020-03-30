import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from './styles/themes';
import { GlobalStyles } from './styles/global';

const defaultTheme = matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light';

console.log(defaultTheme);

const App = () => {
  const [theme, setTheme] = useState(defaultTheme);

  const switchTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div className="App" onClick={switchTheme}>
        COVID-19 stats - Hungary
      </div>
    </ThemeProvider>
  );
};

export default App;
