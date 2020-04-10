import React from 'react';
import styled from 'styled-components';

import { ThemeSwitcher } from 'components/ThemeSwitcher';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

export const Header = () => {
  return (
    <StyledHeader>
      <h1>COVID-19 statisztikák</h1>
      <ThemeSwitcher />
    </StyledHeader>
  );
};
