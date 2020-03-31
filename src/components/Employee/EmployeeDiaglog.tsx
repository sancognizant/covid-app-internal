// prettier-ignore
import { Button, Dialog, DialogActions, DialogTitle, FormControl, InputLabel, FormHelperText, Input  } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
import { useActions } from '../../actions/';
import * as EmployeeActions from '../../actions/employee';
import { IEmployee } from '../../model';

interface Props {
  open: boolean;
  onClose: () => void;
}

export function EmployeeDialog(props: Props) {
  const { open, onClose } = props;
  const classes = useStyles();
  const [employee, setEmployee] = React.useState<IEmployee>({
    empId: '',
    lastName: '',
    firstName: '',
    department: '',
    acctName: ''
  });
  const employeeActions = useActions(EmployeeActions);

  const handleClose = () => {
    employeeActions.addEmployee({
      empId: employee.empId,
      lastName: employee.lastName,
      firstName: employee.firstName,
      department: employee.department,
      acctName: employee.acctName
    });

    console.log(employee);

    onClose();
  };

  const updateField = (e: any) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Employee Daily Declaration Entry</DialogTitle>
      <FormControl>
        <InputLabel htmlFor="employeeId">Employee Id</InputLabel>
        <Input name="empId" value={employee.empId} onChange={updateField} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="firstName">First Name </InputLabel>
        <Input
          name="firstName"
          value={employee.firstName}
          onChange={updateField}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="lastName">LastName Name </InputLabel>
        <Input
          name="lastName"
          value={employee.lastName}
          onChange={updateField}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="department">Department</InputLabel>
        <Input
          name="department"
          value={employee.department}
          onChange={updateField}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="acctName">Account Name</InputLabel>
        <Input
          name="acctName"
          value={employee.acctName}
          onChange={updateField}
        />
      </FormControl>
      <DialogActions>
        <Button color="primary" onClick={handleClose}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const useStyles = makeStyles({
  textField: {
    width: '100%',
    margin: 20
  }
});
