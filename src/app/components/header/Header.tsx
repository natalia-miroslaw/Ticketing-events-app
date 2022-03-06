import React from 'react';
import styled from 'styled-components';
import { NavByCategory } from './navigation/Navigation';
import { SubmitButtons } from './SubmitButtons/SubmitButtons';
import { Logo } from './logo/Logo';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  width: 100%;
  border: 1px solid black;
`;

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo />
      <NavByCategory />
      <SubmitButtons />
    </HeaderContainer>
  );
};
