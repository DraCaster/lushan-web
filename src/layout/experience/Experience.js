import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { AvatarRoutes } from '../AvatarRoutes'
import { useStyles } from './StyleExperience'

//Components
import { Grid, Typography } from '@material-ui/core'
import Avatar from '../../components/avatar/Avatar'
import Button from '../../components/button/Button'


const Experiencie = () => {
    const classes = useStyles();
    return (
        <div className={classes.root} id="Experience">
            <Grid container
                direction="column"
                justify="space-between"
                alignItems="center"
              >
                <Grid item xs={12} sm={12}>
                    <Typography className={classes.typography} variant='overline'>
                        Algunas de las tecnologias con las que trabajo
                    </Typography>
                </Grid>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    {AvatarRoutes.map(elem => {
                        return (<Grid item key={elem.name} xs={6} sm={2}>
                            <Avatar url={elem.url} /></Grid>)
                    })}
                </Grid>
                <Grid item>
                    <Link to="/#Contact" className={classes.link}>
                        <Button title="Hablemos!" />
                    </Link>
                </Grid>
            </Grid>
        </div>)
}
export default Experiencie