import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const Inputs: React.FC = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
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
