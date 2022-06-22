import makeStyles from '@mui/styles/makeStyles';

export const useHorizontalEventCardStyles = makeStyles(
  () => ({
    cardContent: {
      height: '100%',
      paddingTop: '5px'
    },
    background: {
      backgroundColor: 'white',
      cursor: 'pointer',
      height: '100px'
    },
    text: {
      textDecoration: 'none',
      padding: '0px 0px 10px 0px'
    }
  }),
  { name: 'horizontalEventCardStyles' }
);
