import React from 'react';
import styled from 'styled-components';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { getEventsSelector } from '../../../../../store/selectors';
import { useNavigate } from 'react-router-dom';

const MapDivContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .Popup:hover {
    cursor: pointer;
    color: palette(primary);
  }
`;

export const MyMap: React.FC = () => {
  const events = useSelector(getEventsSelector);
  const navigate = useNavigate();

  const popUpClickHandler = (eventID: number): void => {
    navigate(`/event/${eventID}`);
  };

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
        {events.map((event, index) => {
          if (
            event.localization?.position?.lat &&
            event.localization?.position?.lon
          ) {
            return (
              <Marker
                key={index}
                position={[
                  event.localization.position.lat,
                  event.localization.position.lon
                ]}>
                <Popup>
                  <div
                    onClick={() => popUpClickHandler(event.id)}
                    className="Popup">
                    {event.title}
                  </div>
                </Popup>
              </Marker>
            );
          }
        })}
      </MapContainer>
    </MapDivContainer>
  );
};
