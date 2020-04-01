import React from 'react';
import { FormControl, InputLabel } from '@material-ui/core';
import TextBox from '../Form/TextBox';
import SubmitButton from '../Form/SubmitButton';
import { makeStyles, StylesContext } from '@material-ui/styles';
import Box from '@material-ui/core/Box';


export interface RegistrationProps {

}


const Registration: React.SFC<RegistrationProps> = () => {
    const classes = useStyles();

    return (
        <div>
            <form>
                <Box display="flex" justifyContent="flex-start">
                <FormControl>
                    <InputLabel className={classes.EmpIdLabel}>Employee Id: </InputLabel>
                    <TextBox label="Employee Id" defaultValue="" readOnly={false} styles={classes.EmpIdTextBox} />
                </FormControl>
                </Box>

                <Box display="flex" justifyContent="flex-start">
                <FormControl>
                    <InputLabel className={classes.FirstNameLabel}>First Name: </InputLabel>
                    <TextBox label="First Name" defaultValue="" readOnly={false} styles={classes.FirstNameTextBox} />
                </FormControl>
                </Box>

                <FormControl>
                    <InputLabel className={classes.LastNameLabel}>Last Name: </InputLabel>
                    <TextBox label="Last Name" defaultValue="" readOnly={false} styles={classes.LastNameTextBox} />
                </FormControl>

                <FormControl>
                    <InputLabel className={classes.ManagerFirstNameLabel}>Manager's First Name: </InputLabel>
                    <TextBox label="Manager's First Name" defaultValue="" readOnly={false} styles={classes.ManagerFirstNameTextBox} />
                </FormControl>

                <FormControl>
                    <InputLabel className={classes.ManagerLastNameLabel}>Manager's Last Name: </InputLabel>
                    <TextBox label="Manager's Last Name" defaultValue="" readOnly={false} styles={classes.ManagerLastNameTextBox} />
                </FormControl>

                <FormControl>
                    <InputLabel className={classes.ManagerEmployeeIdLabel}>Manager's Employee Id:</InputLabel>
                    <TextBox label="Manager's Employee Id" defaultValue="" readOnly={false} styles={classes.ManagerEmployeeIdTextBox} />
                </FormControl>

                <FormControl>
                    <InputLabel className={classes.RoleLabel}>Role:</InputLabel>
                    <TextBox label="Role" defaultValue="" readOnly={false} styles={classes.RoleTextBox} />
                </FormControl>

                <FormControl>
                    <InputLabel className={classes.MISDepartmentLabel}>MIS Department:</InputLabel>
                    <TextBox label="MIS Department" defaultValue="" readOnly={false} styles={classes.MISTextBox} />
                </FormControl>

                <FormControl>
                    <InputLabel className={classes.AccountNameLabel}>Account Name:</InputLabel>
                    <TextBox label="Account Name" defaultValue="" readOnly={false} styles={classes.AccountNameTextBox} />
                </FormControl>

            </form>
        </div>
    );
}

export default Registration;

const useStyles = makeStyles({
    EmpIdLabel: {
        position: 'absolute',
        display: 'flex',
        flexWrap: 'wrap',
        height: '20px',
        left: '310px',
        right: '1008px',
        top: '20px',
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
        display: 'flex',
        flexWrap: 'wrap',
        height: '20px',
        left: '310px',
        right: '1008px',
        top: '60px',
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
        left: '450px',
        top: '60px',
    },
    LastNameLabel: {
        position: 'absolute',
        display: 'grid',
        height: '20px',
        left: '-80px',
        right: '1008px',
        top: '160px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F',
    },

LastNameTextBox: {
        left: '60px',
        top: '180px',
    },

    ManagerFirstNameLabel: {
        position: 'absolute',
        height: '20px',
        left: '-275px',
        right: '1008px',
        top: '230px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F',
    },

    ManagerFirstNameTextBox: {
        left: '-135px',
        top: '255px',
    },

    ManagerLastNameLabel: {
        position: 'absolute',
        height: '20px',
        left: '-472px',
        right: '1008px',
        top: '320px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F',
    },

    ManagerLastNameTextBox: {
        left: '-330px',
        top: '345px',
    },
    
    ManagerEmployeeIdLabel: {
        position: 'absolute',
        height: '20px',
        left: '-670px',
        right: '1008px',
        top: '400px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F',
    },

    ManagerEmployeeIdTextBox: {
        left: '-525px',
        top: '420px',
    },

    RoleLabel: {
        position: 'absolute',
        height: '20px',
        left: '-880px',
        right: '1008px',
        top: '480px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F',
    },

    RoleTextBox: {
        left: '-720px',
        top: '500px',
    },

    MISDepartmentLabel: {
        position: 'absolute',
        height: '20px',
        left: '-1170px',
        right: '1008px',
        top: '560px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F',
    },

    MISTextBox: {
        left: '-915px',
        top: '580px',
    },

    AccountNameLabel: {
        position: 'absolute',
        height: '20px',
        left: '295px',
        right: '1008px',
        top: '590px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F',
    },

    AccountNameTextBox: {
        left: '450px',
        top: '610px',
    },

});

