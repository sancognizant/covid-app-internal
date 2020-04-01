import React from 'react';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';

export function Filter() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      Filter
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    
  }
}));
