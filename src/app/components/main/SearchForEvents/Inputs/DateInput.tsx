import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';
import {
  DateRange,
  DateRangePicker
} from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useDispatch, useSelector } from 'react-redux';
import { eventsSelectors } from '../../../../../store/selectors';
import { setFilters } from '../../../../../store/slices/event-slice';

export const DateInput: React.FC = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState<DateRange<Date>>([null, null]);

  const filters = useSelector(eventsSelectors.getEventsByFilters);

  const handleChange = (newDate: DateRange<Date>): void => {
    setDate(newDate);
  };

  const setDateRange = (newDate: DateRange<Date>): void => {
    dispatch(
      setFilters({
        ...filters,
        date: {
          dateFrom: newDate[0]?.getTime() ?? null,
          dateTo: newDate[1]?.getTime() ?? null
        }
      })
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText="Date-From"
        endText="Date-To"
        value={date}
        onChange={(newValue) => handleChange(newValue)}
        onClose={() => setDateRange(date)}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
        inputFormat="dd-MM-yyyy"
        disableMaskedInput
      />
    </LocalizationProvider>
  );
};
