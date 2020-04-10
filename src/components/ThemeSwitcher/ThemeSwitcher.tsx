import React from 'react';
import styled from 'styled-components';

import { ThemeContext } from 'contexts/ThemeContext';
import { MoonIcon, SunIcon } from 'assets/icons';
import { Themes } from 'utils/getDefaultTheme';

const StyledButton = styled.button`
  background: none;
  border: none;
  color: #565656;
  cursor: pointer;
  padding: 3px;
  display: flex;

  svg {
    fill: ${({ theme }) => theme.text};
  }

  :hover {
    svg {
      fill: #233cbc;
    }
  }
`;

export const ThemeSwitcher = () => {
  return (
    <ThemeContext.Consumer>
      {({ toggleTheme, theme }) => (
        <StyledButton onClick={toggleTheme} title="switch theme">
          {theme === Themes.DARK ? <MoonIcon /> : <SunIcon />}
        </StyledButton>
      )}
    </ThemeContext.Consumer>
  );
};
