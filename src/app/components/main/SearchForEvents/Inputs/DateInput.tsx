import React, { useState } from 'react';
import { Stack, TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, MobileDatePicker } from '@mui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { filterEventsAction } from '../../../../../store/async-actions/filter-events.action';
import { getEventsFiltersSelector } from '../../../../../store/selectors';

export const DateInput: React.FC = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState<number | null>();
  const filters = useSelector(getEventsFiltersSelector);

  const handleChange = (newDate: number | null): void => {
    setDate(newDate);
    dispatch(filterEventsAction({ ...filters, date: { dateFrom: null, dateTo: null }}));
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
