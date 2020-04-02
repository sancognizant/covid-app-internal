// prettier-ignore
import { Checkbox, IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../../actions/';
import * as EmployeeActions from '../../actions/employee';
import { IEmployee } from '../../model';
import { RootState } from '../../reducers';
import { EmployeeDialog } from './EmployeeDiaglog';

export function EmployeeTable() {
  const classes = useStyles();
  const employeeList = useSelector((state: RootState) => state.employeeList);
  const employeeActions = useActions(EmployeeActions);

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = (emp: IEmployee) => {
    employeeActions.updateEmployee({
      empId: emp.empId,
      lastName: emp.lastName,
      firstName: emp.firstName,
      department: emp.department,
      acctName: emp.acctName
    });

    setOpen(true);
    console.log(emp);
  };

  return (
    <Paper className={classes.paper}>
      <EmployeeDialog open={open} onClose={handleClose} />
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell padding="default">ID</TableCell>
            <TableCell padding="default">First Name</TableCell>
            <TableCell padding="default">Last Name</TableCell>
            <TableCell padding="default">Department</TableCell>
            <TableCell padding="default">Account Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employeeList.map((employee: IEmployee) => {
            return (
              <TableRow key={employee.empId} hover>
                <TableCell padding="default">{employee.empId}</TableCell>
                <TableCell padding="default">{employee.firstName}</TableCell>
                <TableCell padding="default">{employee.lastName}</TableCell>
                <TableCell padding="default">{employee.department}</TableCell>
                <TableCell padding="default">{employee.acctName}</TableCell>
                <TableCell padding="default">
                  <IconButton
                    aria-label="Delete"
                    color="default"
                    onClick={() =>
                      employeeActions.deleteEmployee(employee.empId)
                    }
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>

                <TableCell padding="default">
                  <IconButton
                    aria-label="Delete"
                    color="default"
                    onClick={() => handleUpdate(employee)}
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

const useStyles = makeStyles({
  paper: {
    width: '100%',
    minWidth: 260,
    display: 'inline-block'
  },
  table: {
    width: '100%'
  }
});
