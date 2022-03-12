import { AppThunkAction } from '../reducers/rootReducer';
import { DUMMY_DATA } from '../../app/components/mock';
import { setFilteredEvents, setEventsTags } from '../slices/event-slice';
import { EventType } from '../../app/types/eventType';
import uniq from 'lodash/uniq';

//back-end simulation:
const getFilteredData = (filter: string): Promise<EventType[]> => {
  return new Promise((resolve) => {
    let data: EventType[];

    // 'ASDDDDDDD'
    if (filter) {
      data = DUMMY_DATA.filter((event) => {
        return event.category === filter;
      });
    }
    // '' <- PUSTY STRING
    else {
      data = DUMMY_DATA;
    }
    return setTimeout(() => resolve(data), Math.random() * 2000);
  });
};

export const filterEventsAction = (filterData: string): AppThunkAction => {
  return async function thunk(dispatch): Promise<void> {
    try {
      const filteredData = await getFilteredData(filterData);
      const tagsList = uniq(
        filteredData.map((item: EventType) => item?.tags).flat()
      );
      dispatch(setEventsTags(tagsList));
      console.log('tagsList', tagsList);
      dispatch(setFilteredEvents(filteredData));
    } catch (err) {
      console.log(err);
    }
  };
};
