import { styled } from '@mui/material';

export const NavContainer = styled('nav')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '10px',
  height: '100%'
});

export const UlContainer = styled('ul')({
  height: '100%',
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
});

export const LiContainer = styled('li')({
  margin: '0 1rem'
});
