import React from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

export const MyMap: React.FC = () => {
  return <MapContainer>Map</MapContainer>;
};
