import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { TeamTable } from './TeamTable';
import { Filter } from './Filter';

export function TeamTableWrapper () {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Filter />
      <TeamTable />
    </Grid>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    border: '1px black solid',
    height: 500,
    padding: 20,
    [theme.breakpoints.down('md')]: {
      paddingTop: 50,
      paddingLeft: 15,
      paddingRight: 15
    }
  }
}));
