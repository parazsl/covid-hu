import React, { Fragment } from 'react';

import { ThemeSwitcher } from 'components/ThemeSwitcher';

export const Header = () => {
  return (
    <Fragment>
      <h1>COVID-19 statisztikák</h1>
      <ThemeSwitcher />
    </Fragment>
  );
};
