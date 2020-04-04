import React, { FC } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  onClick: () => void;
  title: string;
};

const StyledButton = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  padding: 3px 5px;
  cursor: pointer;
`;

export const Button: FC<ButtonProps> = ({ onClick, title }) => {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
};
