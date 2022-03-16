import { AppThunkAction } from '../reducers/rootReducer';
import { DUMMY_DATA } from '../../app/components/mock';
import { setFilteredEvents, setEventsTags } from '../slices/event-slice';
import { EventType } from '../../app/types/eventType';
import uniq from 'lodash/uniq';

// back-end simulation:
interface getFilteredDataProps {
  category: string;
  tag: string;
}

const getFilteredData = ({
  category = '',
  tag = ''
}: getFilteredDataProps): Promise<EventType[]> => {
  return new Promise((resolve) => {
    let data: EventType[];

    // 'ASDDDDDDD'
    if (category) {
      data = DUMMY_DATA.filter((event) => {
        return event.category === category;
      });
    }

    if (tag) {
      data = DUMMY_DATA.filter((event) => {
        return event.tags.some((eventTag) => eventTag === tag);
      });
      // filtrowanie po tagach
    }

    // if (date) {
    //   // filtrowanie po dacie
    // }
    // '' <- PUSTY STRING
    else {
      data = DUMMY_DATA;
    }
    return setTimeout(() => resolve(data), Math.random() * 2000);
  });
};

interface filterEventsActionProps {
  category: string;
  tag: string;
}

export const filterEventsAction = (
  props: filterEventsActionProps
): AppThunkAction => {
  return async function thunk(dispatch): Promise<void> {
    try {
      const filteredData = await getFilteredData(props);
      // filteredData.map((item) => console.log(item.date.getMilliseconds()));
      // filteredData.sort(
      //   (a, b) => a.date.getMilliseconds() - b.date.getMilliseconds()
      // );
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
