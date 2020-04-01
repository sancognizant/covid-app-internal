import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useActions } from '../../actions/';
import * as SearchBarActions from '../../actions/searchBar';

export function SearchBar() {
  const classes = useStyles();
  const [empId, setEmpId] = useState('');

  const searchBarActions = useActions(SearchBarActions);

  const setEmployeeId = () => {
    console.log(empId)
    searchBarActions.setSearchEmpId(empId)
  }

  return (
    <div className={classes.root}>
      <form autoComplete="off">
        <TextField 
          id="outlined-basic"
          variant="outlined"
          label="Employee ID"
          className={classes.textBox}
          onChange={(e) => setEmpId(e.target.value)}
      />
      </form>
      <Button variant="contained" onClick={() => setEmployeeId()}>Search</Button>
    </div>
    
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: 20,
    [theme.breakpoints.down('md')]: {
      paddingTop: 50,
      paddingLeft: 15,
      paddingRight: 15
    },
    display: 'flex',

  },
  textBox: {
    width: 400
  }
}));
