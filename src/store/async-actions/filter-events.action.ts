import { AppThunkAction } from '../reducers/rootReducer';
import { DUMMY_DATA } from '../../app/components/mock';
import { setFilteredEvents } from '../slices/event-slice';
import { EventType } from '../../app/types/eventType';

//back-end simulation:
const getFilteredData = (filter: string): Promise<EventType[]> => {
  return new Promise((resolve) => {
    const data = DUMMY_DATA.filter((event) => {
      return event.category === filter;
    });
    return setTimeout(() => resolve(data), Math.random() * 2000);
  });
};

export const filterEventsAction = (filterData: string): AppThunkAction => {
  return async function thunk(dispatch): Promise<void> {
    try {
      const filteredData = await getFilteredData(filterData);
      dispatch(setFilteredEvents(filteredData));
    } catch (err) {
      console.log(err);
    }
  };
};
