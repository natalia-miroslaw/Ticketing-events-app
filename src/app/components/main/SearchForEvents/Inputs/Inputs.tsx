import React from 'react';
import styled from 'styled-components';

const InputsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border: 1px solid black;
`;

export const Inputs: React.FC = () => {
  const inputTextChangeHandler = () => {};

  return (
    <InputsContainer>
      <label>What are you interested in?</label>
      <input type="text" onChange={inputTextChangeHandler} />
      <label>Date</label>
      <input type="date" />
      <button type="submit">Search</button>
    </InputsContainer>
  );
};
