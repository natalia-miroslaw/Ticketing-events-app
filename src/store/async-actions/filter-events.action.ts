import { AppThunkAction } from '../reducers/rootReducer';
import { DUMMY_DATA } from '../../app/components/mock';
import {
  setFilteredEvents,
  setEventsTags,
  Ifilters,
  setFilters
} from '../slices/event-slice';
import { EventType } from '../../app/types/eventType';
import uniq from 'lodash/uniq';

const dummyData = [...DUMMY_DATA];

// back-end simulation:
const getFilteredData = ({
  category,
  tag
}: //date
Ifilters): Promise<EventType[]> => {
  return new Promise((resolve) => {
    let data: EventType[] = dummyData;

    // filtrowanie po category
    if (category) {
      data = DUMMY_DATA.filter((event) => {
        return event.category === category;
      });
    }

    // filtrowanie po tagach
    if (tag) {
      data = DUMMY_DATA.filter((event) => {
        return event.tags.some((eventTag) => eventTag === tag);
      });
    }

    // filtrowanie po dacie
    // if (date) {
    //   data = DUMMY_DATA.filter((event) => {
    //     return event.date === date;
    //   });
    // }

    // '' <- PUSTY STRING
    else {
      data = DUMMY_DATA;
    }
    return setTimeout(() => resolve(data), Math.random() * 2000);
  });
};

export const filterEventsAction = (props: Ifilters): AppThunkAction => {
  return async function thunk(dispatch): Promise<void> {
    try {
      const filteredData = await getFilteredData(props);
      const sortedData = filteredData.sort((a, b) => a.date - b.date);

      const tagsList = uniq(
        dummyData.map((item: EventType) => item?.tags).flat()
      );
      dispatch(setEventsTags(tagsList));
      dispatch(setFilters(props));
      console.log('tagsList', tagsList);
      dispatch(setFilteredEvents(sortedData));
    } catch (err) {
      console.log(err);
    }
  };
};
