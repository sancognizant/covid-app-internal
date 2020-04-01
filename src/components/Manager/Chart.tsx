import * as React from 'react';
import { Grid, Button, Box, Paper } from '@material-ui/core';
import { Theme, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import PieChart from 'react-minimal-pie-chart';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
 

export function Chart() {
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      primary: red
    }
  });

  return (
    <Grid 
      container 
      justify="center"
      // direction="column"
      className={classes.root}
    >
      <PieChart 
        animate={true}
        animationDuration={500}
        animationEasing="ease-out"
        cx={50}
        cy={50}
        data={[
          {
            color: '#E38627',
            title: 'One',
            value: 10
          },
          {
            color: '#C13C37',
            title: 'Two',
            value: 15
          },
          {
            color: '#6A2135',
            title: 'Three',
            value: 20
          }
        ]}
        label={true}
        labelPosition={75}
        labelStyle={{
          fill: '#121212',
          fontSize: '6px'
        }}
        lengthAngle={360}
        lineWidth={50}
        onClick={undefined}
        onMouseOut={undefined}
        onMouseOver={undefined}
        paddingAngle={0}
        radius={50}
        rounded={false}
        startAngle={0}
        viewBoxSize={[
          100,
          100
        ]}
      />
      <Grid className={classes.paper}>
        <Paper square/>
        <Paper square/>
      </Grid>
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
  },

  paper: {
    color: '#E38627',
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0),
      width: theme.spacing(1),
      height: theme.spacing(1)
    }
  }
}));
