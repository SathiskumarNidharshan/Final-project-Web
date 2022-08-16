import React, { useEffect, useState } from "react";
// import { Box, Card, Grid, Typography, Button } from "@material-ui/core";

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import DownloadIcon from '@mui/icons-material/Download';
import Grid from '@mui/material/Grid';

export default function Dashboard() {
 

  return (
    <>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 1180,
          height: 280,
        },
      }}
    >
    
      <Paper />
      
    </Box>
    <br/>
   
    {/* <Grid container rowSpacing={1} >
        <Grid item xs={6}  >
             <Button variant="contained"> <DownloadIcon/> Download play store</Button>
        </Grid>
        <Grid item xs={6} >
            <Button variant="contained"> <DownloadIcon/> Download App store</Button>
          </Grid>
    </Grid> */}

<Box
  m={5}
  display="flex"
  justifyContent="right"
  alignItems="right"
  
>
        <Grid item xs={6} sx={{top: 0,left: -50}} >
             <Button variant="contained"> <DownloadIcon/> Download play store</Button>
        </Grid>
        <Grid item xs={6}  >
             <Button variant="contained"> <DownloadIcon/> Download App store</Button>
        </Grid>
  
</Box>

<Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 5,
          width:300,
          height: 400,
        },
      }}
    >
     
      <Paper variant="outlined"  square  sx={{alignItems:"center"}}/>
    
    </Box>

  

    </>
  );
}