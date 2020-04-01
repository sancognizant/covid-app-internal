import React from 'react';
import { FormControl, InputLabel } from '@material-ui/core';
import TextBox from '../Form/TextBox';
import SubmitButton from '../Form/SubmitButton';
import { makeStyles, StylesContext } from '@material-ui/styles';


export interface RegistrationProps {

}


const Registration: React.SFC<RegistrationProps> = () => {
    const classes = useStyles();

    return (
        <div>
            <form>
                <FormControl>
                    <InputLabel className={classes.EmpIdLabel}>Employee Id: </InputLabel>
                    <TextBox label="Employee Id" defaultValue="" readOnly={false} styles={classes.EmpIdTextBox} />
                </FormControl>

                <FormControl>
                    <InputLabel className={classes.FirstNameLabel}>First Name: </InputLabel>
                    <TextBox label="First Name" defaultValue="" readOnly={false} styles={classes.FirstNameTextBox} />
                </FormControl>
            </form>
        </div>
    );
}

export default Registration;

const useStyles = makeStyles({
    EmpIdLabel: {
        position: 'absolute',
        height: '20px',
        left: '343px',
        right: '1008px',
        top: 'calc(50 % - 20px / 2 - 666.5px)',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F'
    },
    EmpIdTextBox: {
        left: '450px',
        top: '20px',
    },
    FirstNameLabel: {
        position: 'absolute',
        height: '20px',
        left: '148px',
        right: '1008px',
        //top: 'calc(50 % - 40px / 2 - 568.5px)',
        top: '80px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F'
    },

    FirstNameTextBox: {
        //position: 'relative',
        left: '255px',
        top: '100px',
    },


});

