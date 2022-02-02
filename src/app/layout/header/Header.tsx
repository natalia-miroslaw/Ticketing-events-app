import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100px;
  border: 1px solid black;
`;

export const Header: React.FC = () => {
  return <HeaderContainer>Header</HeaderContainer>;
};
