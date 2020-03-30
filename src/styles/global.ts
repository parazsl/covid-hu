import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
  }

body {
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body};
}
`;
