import React from 'react'
import ImgAvatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import useStyles from './StyleAvatar'

const Avatar = (props) => {
    const classes = useStyles();
    return (
        <Box className={classes.box}> 
        <ImgAvatar alt="my avatar" src={props.url} className={classes.avatar}/>
        </Box>
    )
}

export default Avatar