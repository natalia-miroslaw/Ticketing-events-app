import React from 'react';
import styled from 'styled-components';
import {
  MapContainer,
  TileLayer,
  useMap
} from 'https://cdn.esm.sh/react-leaflet';

const MapDivContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyMap: React.FC = () => {
  return (
    <MapDivContainer>
      <MapContainer
        style={{ height: '100%', width: '100%' }}
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customisable.
          </Popup>
        </Marker>
      </MapContainer>
    </MapDivContainer>
  );
};
