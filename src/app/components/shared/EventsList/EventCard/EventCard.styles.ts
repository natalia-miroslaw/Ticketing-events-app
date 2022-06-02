import makeStyles from '@mui/styles/makeStyles';

export const useEventCardStyles = makeStyles(
  (theme) => ({
    background: {
      fontSize: '12px',
      background: 'white',
      cursor: 'pointer'
    },
    text: {
      textDecoration: 'none'
    }
  }),
  { name: 'eventCardStyles' }
);
