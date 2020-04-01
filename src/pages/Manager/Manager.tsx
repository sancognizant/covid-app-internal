import * as React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { Chart } from '../../components/Manager';

export function Manager() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Typography>Manager's Screen</Typography>
      <Chart/>
    </Grid>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: 20,
    [theme.breakpoints.down('md')]: {
      paddingTop: 50,
      paddingLeft: 15,
      paddingRight: 15
    }
  }
}));
