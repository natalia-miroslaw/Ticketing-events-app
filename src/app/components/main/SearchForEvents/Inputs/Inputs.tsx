import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { getEventsTagsSelector } from '../../../../../store/selectors';

export const Inputs: React.FC = () => {
  const [tags, setTags] = React.useState('');
  const eventsTags = useSelector(getEventsTagsSelector);
  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    setTags(event.target.value as string);
    filterEventsAction('');
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tags</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tags}
          label="Tags"
          onChange={handleChange}>
          {eventsTags.map((eventTag, index) => (
            <MenuItem value={index}>{eventTag}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
