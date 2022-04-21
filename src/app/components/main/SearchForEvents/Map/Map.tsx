import React from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyMap: React.FC = () => {
  return <MapContainer>Map</MapContainer>;
};
