// prettier-ignore
import { Button, Dialog, DialogActions, DialogTitle, FormControl, InputLabel, FormHelperText, Input  } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
import { useActions } from '../../actions/';
import * as TodoActions from '../../actions/todo';
import { display } from '@material-ui/system';

interface Props {
  open: boolean;
  onClose: () => void;
}

export function EmployeeDialog(props: Props) {
  const { open, onClose } = props;
  const classes = useStyles();
  const [newTodoText, setNewTodoText] = React.useState('');
  const todoActions = useActions(TodoActions);

  const handleClose = () => {
    todoActions.addTodo({
      id: Math.random(),
      completed: false,
      text: newTodoText
    });
    onClose();

    // reset todo text if user reopens the dialog
    setNewTodoText('');
  };

  const handleChange = (event: any) => {
    setNewTodoText(event.target.value);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Employee Daily Declaration Entry</DialogTitle>
      <FormControl>
        <InputLabel htmlFor="employeeId">Employee Id</InputLabel>
        <Input id="employeeId" aria-describedby="my-helper-text" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="firstName">First Name </InputLabel>
        <Input id="firstName" aria-describedby="my-helper-text" />
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
