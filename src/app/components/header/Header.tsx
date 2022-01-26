import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  padding: 2%;
  border-bottom: 1px solid black;
`;

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <div>Logo</div>
      <div>Register button</div>
      <div>Log in button</div>
      <div>Menu component</div>
    </StyledHeader>
  );
};
