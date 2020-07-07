import React from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    Link
} from '@material-ui/core'
import { styles } from './StyleMenuToolbar'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/MailOutline';
import {withStyles} from '@material-ui/core/styles'

const StyledAppBar = withStyles ({
    root:{
        background: '#b34759',
        position: 'static'
    }
})(AppBar)

const MenuToolbar = () => {
    const classes = styles
    return (
            <StyledAppBar >
                <Toolbar variant='dense' >
                    <Link rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/lujanrojasinformatica/">
                    <IconButton className={classes.icon} href="">
                        <LinkedInIcon />
                    </IconButton>
                    </Link>
                    <Link rel="noreferrer" target="_blank" href="https://github.com/DraCaster">
                    <IconButton className={classes.icon}>
                        <GitHubIcon />
                    </IconButton>
                    </Link>
                    <Link rel="noreferrer" target="_blank" href="mailto:lujanrojas.informatica@gmail.com">
                    <IconButton className={classes.icon}>
                        <MailIcon />
                    </IconButton>
                    </Link>
                </Toolbar>
            </StyledAppBar>
    );
}


export default MenuToolbar;
