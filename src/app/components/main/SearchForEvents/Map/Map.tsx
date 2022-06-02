import React from 'react';
import styled from 'styled-components';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

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
        center={[51.919438, 19.145136]}
        zoom={5}
        scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[52.237049, 21.017532]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customisable.
          </Popup>
        </Marker>
      </MapContainer>
    </MapDivContainer>
  );
};
