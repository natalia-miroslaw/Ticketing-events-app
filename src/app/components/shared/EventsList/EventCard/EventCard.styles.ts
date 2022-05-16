import makeStyles from '@mui/styles/makeStyles';

export const useEventCardStyles = makeStyles(
  (theme) => ({
    background: {
      fontSize: '12px',
      background: 'white'
    },
    text: {
      textDecoration: 'none'
    }
  }),
  { name: 'eventCardStyles' }
);
