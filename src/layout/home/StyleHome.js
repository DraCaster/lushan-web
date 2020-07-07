import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#16151c',
    },
    typography: {
        margin: theme.spacing(8),
        fontSize: 20,
        color: '#EBEBEB',
    },
    link:{
        textDecoration: 'none'
    },
    grid:{
        marginTop: theme.spacing(8)
    }

}));

