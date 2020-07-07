import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#16151c',
    },
    typography: {
        margin: theme.spacing(8),
        fontSize: 20,
        color: '#EBEBEB',
        textAlign: 'center'
    },
    link: {
        textDecoration: 'none'
    },
    card: {
        backgroundColor: '#c95973'
    },
    box:{
        display:'flex',
        width:500,
        height:80,
        backgroundColor:'lightblue'
    },

}));

