import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px;
  height: 100%;

  & ul {
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  & li {
    margin: 0 1rem;
    width: 8.5rem;
    border: 1px solid black;
    display: flex;
    justify-content: center;
  }
`;
