import React from 'react';
import { styled } from '@mui/material';
import { NavByCategory } from './navigation/Navigation';
import { SubmitButtons } from './SubmitButtons/SubmitButtons';
import { Logo } from './logo/Logo';

const HeaderContainer = styled('header')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
  borderBottom: '1px solid lightgrey'
});

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo />
      <NavByCategory />
      <SubmitButtons />
    </HeaderContainer>
  );
};
