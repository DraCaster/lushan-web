import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import {useStyles} from './StyleHome'
import avatarImg from '../../assets/avatar.png'

//Components
import { Grid, Typography } from '@material-ui/core';
import Avatar from '../../components/avatar/Avatar'
import Button from '../../components/button/Button'

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root} id="Home">
            <Grid container
                direction="column"
                justify="space-evenly"
                alignItems="center">
                <Grid item className={classes.grid}>
                    <Avatar url={avatarImg}/>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Typography className={classes.typography} variant='overline'>
                        Lujan Rojas
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Typography className={classes.typography} variant='overline'>Full Stack Javascript Developer</Typography>
                </Grid>
                <Grid item>
                    <Link to="/#About" className={classes.link}>
                        <Button title="Sobre mi"/>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;