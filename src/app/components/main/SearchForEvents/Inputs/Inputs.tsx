import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { getEventsTagsSelector } from '../../../../../store/selectors';

export const Inputs: React.FC = () => {
  const [tags, setTags] = React.useState('');
  const eventsTags = useSelector(getEventsTagsSelector);

  const handleChange = (event: SelectChangeEvent) => {
    setTags(event.target.value as string);
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

// import React from 'react';
// import styled from 'styled-components';

// const InputsContainer = styled.div`
//   width: 50%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 5px;
//   border: 1px solid black;
// `;

// export const Inputs: React.FC = () => {
//   const inputTextChangeHandler = () => {};

//   return (
//     <InputsContainer>
//       <label>What are you interested in?</label>
//       <input type="text" onChange={inputTextChangeHandler} />
//       <label>Date</label>
//       <input type="date" />
//       <button type="submit">Search</button>
//     </InputsContainer>
//   );
// };
