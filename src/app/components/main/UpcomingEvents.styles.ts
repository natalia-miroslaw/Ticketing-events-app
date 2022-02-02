import styled from 'styled-components';

export const UpcomingEventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
  border: 1px solid black;

  & .event-cards-div {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    border: 1px solid black;

    & div {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid black;
      height: 100%;
    }
  }
`;
