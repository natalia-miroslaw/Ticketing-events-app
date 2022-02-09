import React from 'react';
import styled from 'styled-components';

const InputsContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

export const Inputs: React.FC = () => {
  return (
    <InputsContainer>
      <input />
    </InputsContainer>
  );
};
