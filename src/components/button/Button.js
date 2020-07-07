import React from 'react'
import MyButton from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const StyledButton = withStyles({
    root: {
     background: '#b34759',
      borderRadius: 3,
      border: '2px solid #666',
      color: 'white',
      height: 40,
      padding: '0 30px',
      margin: 20
     
    }
  })(MyButton);

const Button = (props) => {

    return(
        <StyledButton variant="outlined" endIcon={<ExpandMoreIcon/>}>{props.title}</StyledButton>
    )
}

export default Button
