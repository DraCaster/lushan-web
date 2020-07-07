import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { HobbiesRoutes } from '../AvatarRoutes'
import { useStyles } from './StyleAbout'
import { Grid, Typography, Card, Box } from '@material-ui/core'
import Avatar from '../../components/avatar/Avatar'
import Button from '../../components/button/Button'

const About = () => {
    const classes = useStyles();
    return (
        <div className={classes.root} id="About">
            <Grid container
                direction="column"
                justify="space-between"
                alignItems="center"
              >
                <Grid item xs={12} sm={12}>
                    <Typography className={classes.typography} variant='overline'>
                        Un poco sobre mi
                </Typography>
                </Grid>
                <Grid container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                >
                    {HobbiesRoutes.map((elem, index) => {
                        return (
                            <Grid item xs={12} sm={3} key={index}>
                                <Card className={classes.card}>
                                    <Box
                                        display="flex"
                                        width={500} height={80}
                                        bgcolor="lightblue"
                                    >
                                        <Box m="auto">
                                            <Avatar url={elem.url} />
                                        </Box>
                                    </Box>
                                    <Typography variant='subtitle2' className={classes.typography}>
                                        {elem.description}
                                    </Typography>
                                </Card>
                            </Grid>)
                    })}

                </Grid>
                <Grid item>
                    <Link to="/#Experience" className={classes.link}>
                        <Button title="Tecnologias que uso" />
                    </Link>
                </Grid>
            </Grid>
        </div>
    )

}
export default About