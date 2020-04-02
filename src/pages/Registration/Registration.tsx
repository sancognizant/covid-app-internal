import React, {useState} from 'react';
import { FormControl, InputLabel } from '@material-ui/core';
import TextBox from '../../components/Form/TextBox';
import SubmitButton from '../../components/Form/SubmitButton';
import { makeStyles, StylesContext } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import DropDown from '../../components/Form/DropDown';


export interface RegistrationProps {

}


export const Registration: React.SFC<RegistrationProps> = () => {
    const classes = useStyles();
    // initial states for the text fields 
    const [EmployeeId, setEmployeeId] = useState<string>("");
    const [FirstName, setFirstName] = useState<string>("");
    const [LastName, setLastName] = useState<string>("");
    const [ManagerFirstName, setManagerFirstName] = useState<string>("");
    const [ManagerLastName, setManagerLastName] = useState<string>("");
    const [ManagerEmpId, setManagerEmpId] = useState<string>("");
    const [Role, setRole] = useState<string>("");
    const [MISDepartment, setMISDepartment] = useState<string>("");
    const [Account, setAccount] = useState<string>("");
    const [Country, setCountry] = useState<string>("");
    const [WorkLocation, setWorkLocation] = useState<string>("");

    // gets the payload from the text fields 
    const handleSubmit = (e: any) => {
       const payload = {
           employeeId: EmployeeId,
           firstName: FirstName,
           lastName: LastName,
           managerFirstName: ManagerFirstName,
           managerLastName: ManagerLastName,
           managerEmployeeId: ManagerEmpId,
           role: Role,
           MISDepartment: MISDepartment,
           accountName: Account,
           country: Country,
           workLocation: WorkLocation,							
       }

       console.log(payload);
    }

    // sets the state values for the individual fields 
    const handleEmployeeId = (value: string) => {
       setEmployeeId(value);
    }

    const handleFirstName = (value: string) => {
        setFirstName(value);
    }

    const handleLastName = (value: string) => {
       setLastName(value);
    }

    const handleManagerFirstName = (value: string) => {
        setManagerFirstName(value);
    }

    const handleManagerLastName = (value: string) => {
        setManagerLastName(value);
    }

    const handleManagerEmpId = (value: string) => {
        setManagerEmpId(value);
    }

    const handleRole = (value: string) => {
        setRole(value);
    }

    const handleMISDepartment = (value: string) => {
       setMISDepartment(value);
    }

    const handleAccountName = (value: string) => {
        setAccount(value);
    }

    const handleCountry = (value: string) => {
        setCountry(value);
    }

    const handleWorkLocation = (value: string) => {
       setWorkLocation(value);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box display="flex" justifyContent="flex-start">
                    <FormControl>
                        <InputLabel className={classes.EmpIdLabel}>Employee Id: </InputLabel>
                        <TextBox
                            label="Employee Id"
                            defaultValue=""
                            readOnly={false}
                            styles={classes.EmpIdTextBox}
                            onChange={handleEmployeeId} />
                    </FormControl>
                </Box>

                <Box display="flex" justifyContent="flex-start">
                    <FormControl>
                        <InputLabel className={classes.FirstNameLabel}>First Name: </InputLabel>
                        <TextBox
                            label="First Name"
                            defaultValue=""
                            readOnly={false}
                            styles={classes.FirstNameTextBox}
                            onChange={handleFirstName} />
                    </FormControl>
                </Box>

                <Box display="flex" justifyContent="flex-start">
                    <FormControl>
                        <InputLabel className={classes.LastNameLabel}>Last Name: </InputLabel>
                        <TextBox
                            label="Last Name"
                            defaultValue=""
                            readOnly={false}
                            styles={classes.LastNameTextBox}
                            onChange={handleLastName}
                        />
                    </FormControl>
                </Box>

                <Box display="flex" justifyContent="flex-start">
                    <FormControl>
                        <InputLabel className={classes.ManagerFirstNameLabel}>Manager's First Name: </InputLabel>
                        <TextBox
                            label="Manager's First Name"
                            defaultValue=""
                            readOnly={false}
                            styles={classes.ManagerFirstNameTextBox}
                            onChange={handleManagerFirstName} />
                    </FormControl>
                </Box>

                <Box display="flex" justifyContent="flex-start">
                    <FormControl>
                        <InputLabel className={classes.ManagerLastNameLabel}>Manager's Last Name: </InputLabel>
                        <TextBox
                            label="Manager's Last Name"
                            defaultValue=""
                            readOnly={false}
                            styles={classes.ManagerLastNameTextBox}
                            onChange={handleManagerLastName} />
                    </FormControl>
                </Box>

                <Box display="flex" justifyContent="flex-start">
                    <FormControl>
                        <InputLabel className={classes.ManagerEmployeeIdLabel}>Manager's Employee Id:</InputLabel>
                        <TextBox
                            label="Manager's Employee Id"
                            defaultValue=""
                            readOnly={false}
                            styles={classes.ManagerEmployeeIdTextBox}
                            onChange={handleManagerEmpId} />
                    </FormControl>
                </Box>

                <Box display="flex" justifyContent="flex-start">
                    <FormControl>
                        <InputLabel className={classes.RoleLabel}>Role:</InputLabel>
                        <TextBox
                            label="Role"
                            defaultValue=""
                            readOnly={false}
                            styles={classes.RoleTextBox}
                            onChange={handleRole} />
                    </FormControl>
                </Box>

                <Box display="flex" justifyContent="flex-start">
                    <FormControl>
                        <InputLabel className={classes.MISDepartmentLabel}>MIS Department:</InputLabel>
                        <TextBox
                            label="MIS Department"
                            defaultValue=""
                            readOnly={false}
                            styles={classes.MISTextBox}
                            onChange={handleMISDepartment} />
                    </FormControl>
                </Box>

                <Box display="flex" justifyContent="flex-start">
                    <FormControl>
                        <InputLabel className={classes.AccountNameLabel}>Account Name:</InputLabel>
                        <TextBox
                            label="Account Name"
                            defaultValue=""
                            readOnly={false}
                            styles={classes.AccountNameTextBox}
                            onChange={handleAccountName} />
                    </FormControl>
                </Box>

                <Box display="flex" justifyContent="flex-start">
                    <FormControl>
                        <InputLabel className={classes.CountryLabel}>Country:</InputLabel>
                        <DropDown onChange = {handleCountry} styles = {classes.CountryDropDown}/>
                    </FormControl>
                </Box>

                <Box display="flex" justifyContent="flex-start">
                    <FormControl>
                        <InputLabel className={classes.WorkLocationLabel}>Work Location:</InputLabel>
                        <TextBox
                            label="Work Location"
                            defaultValue=""
                            readOnly={false}
                            styles={classes.WorkLocationTextBox}
                            onChange={handleWorkLocation} />
                    </FormControl>
                </Box>

                <div className={classes.Button}>
                    <SubmitButton onClick = {handleSubmit}/>
                </div>


            </form>
        </div>
    );
}



const useStyles = makeStyles({
    EmpIdLabel: {
        position: 'absolute',
        display: 'flex',
        width: '200px',
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
        width: '200px',
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
        display: 'flex',
        width: '200px',
        flexWrap: 'wrap',
        height: '20px',
        left: '310px',
        right: '1008px',
        top: '100px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F',
    },

    LastNameTextBox: {
        left: '450px',
        top: '100px',
    },

    ManagerFirstNameLabel: {
        position: 'absolute',
        width: '200px',
        display: 'flex',
        flexWrap: 'wrap',
        height: '20px',
        left: '240px',
        right: '1008px',
        top: '140px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F',
    },

    ManagerFirstNameTextBox: {
        left: '450px',
        top: '140px',
    },

    ManagerLastNameLabel: {
        position: 'absolute',
        display: 'flex',
        width: '200px',
        flexWrap: 'wrap',
        height: '20px',
        left: '240px',
        right: '1008px',
        top: '180px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F',
    },

    ManagerLastNameTextBox: {
        left: '450px',
        top: '180px',
    },

    ManagerEmployeeIdLabel: {
        position: 'absolute',
        display: 'flex',
        width: '200px',
        flexWrap: 'wrap',
        height: '20px',
        left: '240px',
        right: '1008px',
        top: '210px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F',
    },

    ManagerEmployeeIdTextBox: {
        left: '450px',
        top: '210px',
    },

    RoleLabel: {
        position: 'absolute',
        display: 'flex',
        flexWrap: 'wrap',
        height: '20px',
        left: '310px',
        right: '1008px',
        top: '250px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F',
    },

    RoleTextBox: {
        left: '450px',
        top: '250px',
    },

    MISDepartmentLabel: {
        position: 'absolute',
        display: 'flex',
        width: '200px',
        flexWrap: 'wrap',
        height: '20px',
        left: '240px',
        right: '1008px',
        top: '290px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F',
    },

    MISTextBox: {
        left: '450px',
        top: '290px',
    },

    AccountNameLabel: {
        position: 'absolute',
        display: 'flex',
        width: '200px',
        flexWrap: 'wrap',
        height: '20px',
        left: '240px',
        right: '1008px',
        top: '330px',
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
        top: '330px',
    },

    CountryLabel: {
        position: 'absolute',
        display: 'flex',
        flexWrap: 'wrap',
        height: '20px',
        left: '310px',
        right: '1008px',
        top: '370px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F',
    },

    CountryDropDown: {
        left: '450px',
        top: '370px',
        minWidth: 200,
    },

    WorkLocationLabel: {
        position: 'absolute',
        display: 'flex',
        width: '200px',
        flexWrap: 'wrap',
        height: '20px',
        left: '240px',
        right: '1008px',
        top: '410px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F',
    },


    WorkLocationTextBox: {
        left: '450px',
        top: '410px',
    },

    Button: {
        position: 'absolute',
        left: '700px',
        top: '1100px',
    },

});

