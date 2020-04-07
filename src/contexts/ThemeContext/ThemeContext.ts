import { createContext } from 'react';

import { getDefaultTheme } from 'utils/getDefaultTheme';

export const ThemeContext = createContext({
  theme: getDefaultTheme(),
  toggleTheme: () => {},
});
