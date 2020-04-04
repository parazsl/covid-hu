export enum Themes {
  DARK = 'dark',
  LIGHT = 'light',
}

export const getDefaultTheme: () => Themes = () =>
  matchMedia('(prefers-color-scheme: dark)').matches
    ? Themes.DARK
    : Themes.LIGHT;
