import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { eventsSelectors } from '../../../../store/selectors';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material';
import { fromUnixTime, millisecondsToSeconds } from 'date-fns';
import { Button } from '@mui/material';

const MapDivContainer = styled('div')({
  width: '100%',
  height: '500px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

export const MyMap: React.FC = () => {
  const events = useSelector(eventsSelectors.getAllEvents);
  const navigate = useNavigate();

  return (
    <MapDivContainer>
      <MapContainer
        style={{ height: '100%', width: '100%' }}
        center={[51.919438, 19.145136]}
        zoom={6}
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
                ]}
                eventHandlers={{
                  mouseover: (e) => e.target.openPopup()
                }}>
                <Popup>
                  <b>{event.title}</b>
                  <br />
                  {fromUnixTime(
                    millisecondsToSeconds(event.date)
                  ).toLocaleString('gb-GB')}
                  <br />
                  <Button onClick={() => navigate(`/event/${event.id}`)}>
                    Check it out
                  </Button>
                </Popup>
              </Marker>
            );
          }
        })}
      </MapContainer>
    </MapDivContainer>
  );
};
