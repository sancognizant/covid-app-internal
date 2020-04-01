import React from 'react';
import { Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';

export function TeamTable () {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.root}>
      <Paper>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell padding="default">Employee ID</TableCell>
              <TableCell padding="default">Full Name</TableCell>
              <TableCell padding="default">Latest Date</TableCell>
              <TableCell padding="default">MIS Department</TableCell>
              <TableCell padding="default">Work Location</TableCell>
              <TableCell padding="default">Personal Status</TableCell>
              <TableCell padding="default">Past Travel Status</TableCell>
              <TableCell padding="default"></TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </Paper>
    </Grid>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    border: '1px solid black'
  },
  paper: {
    width: '100%',
    minWidth: 260,
    display: 'inline-block'
  },
  table: {
    wisth: '100%',
    minWidth: 900
  }
}));
