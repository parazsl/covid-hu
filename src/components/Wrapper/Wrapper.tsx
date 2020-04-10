import React, { FC } from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  flex-flow: column;
  width: 960px;
`;

export const Wrapper: FC<{}> = ({ children }) => (
  <StyledMain>{children}</StyledMain>
);
