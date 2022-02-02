import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 300px;
  gap: 0.5rem;
  width: 100%;
  border: 1px solid black;

  & .search-inputs,
  & .search-map {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
  }
`;
