import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent
} from '@mui/material';
import { eventsSelectors } from '../../../../../store/selectors';
import { setFilters } from '../../../../../store/slices/event-slice';

export const SearchByTagsInput: React.FC = () => {
  const [tags, setTags] = React.useState('');
  const eventsTags = useSelector(eventsSelectors.getEventsByTag);
  const filters = useSelector(eventsSelectors.getEventsByFilters);
  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent): void => {
    setTags(event.target.value as string);
    dispatch(setFilters({ ...filters, tag: event.target.value }));
  };

  return (
    <Box sx={{ minWidth: 175 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tags</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tags}
          label="Tags"
          onChange={handleChange}>
          {eventsTags.map((eventTag, index) => (
            <MenuItem key={index} value={eventTag}>
              {eventTag}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
