import React from 'react';
import Button from '@material-ui/core/Button';
import {withStyles, makeStyles} from '@material-ui/core/styles';


export interface SubmitButtonProps {
    
}

/*
Button component with the necessary colors 
*/ 
const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText('#ffd54f'),
        backgroundColor: '#ffd54f',
        '&:hover': {
            backgroundColor: '#ffecb3',
        },
    },
}))(Button);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

const SubmitButton: React.SFC<SubmitButtonProps> = () => {
    const classes = useStyles();
    return (  
        <div>
            <ColorButton variant="contained" color="primary" className={classes.margin}>
              Submit
            </ColorButton>
      </div>
    );
}
 
export default SubmitButton;
