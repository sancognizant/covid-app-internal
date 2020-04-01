import * as React from 'react';
import { Grid, Button, Box, Paper } from '@material-ui/core';
import { Theme, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import PieChart from 'react-minimal-pie-chart';
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
                      <div className='chartLegend'>
                    <div className='legendHeaders' style={{ display: 'flex', justifyContent:'space-between'}}>
                        <div className='dummy' style={{ height: '3vh', width: '6vw', margin:'2vh 1vw' }}></div>
                        <div className='noOfEmployees' style={{ fontSize: '12px', margin: '2vh 1vw'}}>No. of employees</div>
                    </div>
                    <div className='legendCubesList' style={{ display: 'flex', flexDirection: 'column', margin: '1vh 1vw'}}>
                        <div className='container1' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <div className='container2' style={{ display: 'flex', flexDirection: 'row'}}>
                                 <div className='cube' style={{ height: '12px', width: '12px', marginRight: '1vw', background: '#FFD700'}}></div>
                                <div className='cubeName' style={{ fontSize: '12px'}}>No Status</div>
                            </div>
                            <div style={{ fontSize: '12px', marginRight: '3vw'}}>3</div>
                        </div>
                        <div className='container1' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <div className='container2' style={{ display: 'flex', flexDirection: 'row'}}>
                                 <div className='cube' style={{ height: '12px', width: '12px', marginRight: '1vw', background: '#FF0000'}}></div>
                                <div className='cubeName' style={{ fontSize: '12px'}}>Confirmed Case</div>
                            </div>
                            <div style={{ fontSize: '12px', marginRight: '3vw'}}>3</div>
                        </div>
                        <div className='container1' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <div className='container2' style={{ display: 'flex', flexDirection: 'row'}}>
                                 <div className='cube' style={{ height: '12px', width: '12px', marginRight: '1vw', background: '#FFA500'}}></div>
                                <div className='cubeName' style={{ fontSize: '12px'}}>Suspected Case</div>
                            </div>
                            <div style={{ fontSize: '12px', marginRight: '3vw'}}>3</div>
                        </div>
                        <div className='container1' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <div className='container2' style={{ display: 'flex', flexDirection: 'row'}}>
                                 <div className='cube' style={{ height: '12px', width: '12px', marginRight: '1vw', background: '#008000'}}></div>
                                <div className='cubeName' style={{ fontSize: '12px'}}>Stay-Home Notice (SHN)</div>
                            </div>
                            <div style={{ fontSize: '12px', marginRight: '3vw'}}>3</div>
                        </div>
                        <div className='container1' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <div className='container2' style={{ display: 'flex', flexDirection: 'row'}}>
                                 <div className='cube' style={{ height: '4vh', width: '2vw', marginRight: '1vw', background: '#0000FF'}}></div>
                                <div className='cubeName' style={{ fontSize: '12px'}}>Leave of Absence (LOA)</div>
                            </div>
                            <div style={{ fontSize: '12px', marginRight: '3vw'}}>3</div>
                        </div>
                        <div className='container1' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <div className='container2' style={{ display: 'flex', flexDirection: 'row'}}>
                                 <div className='cube' style={{ height: '12px', width: '12px', marginRight: '1vw', background: '#800080'}}></div>
                                <div className='cubeName' style={{ fontSize: '12px'}}>Extra Precautionary Measure</div>
                            </div>
                            <div style={{ fontSize: '12px', marginRight: '3vw'}}>3</div>
                        </div>
                    </div>
                </div>
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
