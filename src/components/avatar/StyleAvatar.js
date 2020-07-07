import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    box:{
      margin: theme.spacing(3)
    },
    avatar: {
      width: theme.spacing(13),
      height: theme.spacing(13),
      border: '2px solid #666'
    },
  }));

export default useStyles