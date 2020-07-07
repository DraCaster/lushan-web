import React from 'react';
import {useStyles} from './StyleContact'
import EmailIcon from '@material-ui/icons/Email';

//Components
import { Grid, Typography, List,ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const Contact = () => {
    const classes = useStyles();
    return (
        <div className={classes.root} id="Contact">
            <Grid container
                direction="column"
                justify="space-evenly"
                alignItems="center">
                <Grid item xs={12} sm={12}>
                    <Typography className={classes.typography} variant='overline'>
                        Hablemos! Contame de tu proyecto o tu idea
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Typography className={classes.typography} variant='overline'>Y la hacemos realidad juntos!</Typography>
                </Grid>
                <Grid item>
                    <List>
                        <ListItem>
                            <ListItemIcon className={classes.listItemIcon}><EmailIcon/></ListItemIcon>
                            <ListItemText className={classes.listItemText} primary="lujanrojas.informatica@gmail.com"/>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </div>
    );
}

export default Contact;