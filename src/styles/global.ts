import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }

body {
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body};
  transition: all 300ms ease-out;
}

#root {
  display: flex;
  justify-content: center;
}
`;
