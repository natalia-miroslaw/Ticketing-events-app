import React, { useState } from 'react';
import { Stack, TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, MobileDatePicker } from '@mui/lab';
import { useDispatch } from 'react-redux';
import { filterEventsAction } from '../../../../../store/async-actions/filter-events.action';

export const DateInput: React.FC = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(null);

  const handleChange = (newDate: Date | null): void => {
    setDate(newDate);
    dispatch(filterEventsAction({ category: '', tag: '', date: newDate }));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <MobileDatePicker
          label="Date"
          inputFormat="MM/dd/yyyy"
          value={date}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
};
