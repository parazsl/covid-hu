import React from 'react';

import { ThemeContext } from 'contexts/ThemeContext';
import { Button } from 'components/Button';

export const ThemeSwitcher = () => {
  return (
    <ThemeContext.Consumer>
      {({ toggleTheme }) => (
        <Button onClick={toggleTheme} title="switch theme" />
      )}
    </ThemeContext.Consumer>
  );
};
