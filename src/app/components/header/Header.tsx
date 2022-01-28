import React from 'react';
import styled from 'styled-components';
import logo from '../../../assets/icons/logo.png';
import { LogInButton } from './LogInButton';
import { Menu } from './Menu';

const StyledHeader = styled.header`
  width: 100%;
  padding: 2%;
  border-bottom: 1px solid black;
  display: inline-flex;
`;

const LogoTag = styled.img`
  width: 175px;
`;

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <a href="http://localhost:3000/">
        <LogoTag src={logo} alt="Home Page" />
      </a>
      <LogInButton>Sign in</LogInButton>
      <LogInButton>Log in</LogInButton>
      <Menu>Menu component</Menu>
    </StyledHeader>
  );
};
