import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import StatusBox from '../components/HomePage-components/StatusBox'
import CommandSelect from '../components/HomePage-components/CommandSelect';
import { useState } from 'react';


export default function HomePage() {

  
  
  const commands = {
    'one' : ['command one', 'command 2', 'command 3', 'command 4'],
    'two' : ['command 2 1', 'command 2 2', 'command 2 3', 'command 2 4']
  }
  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <Typography variant="h4" gutterBottom>Quick Checks</Typography>
      <Grid
        container
        columnSpacing={2}
        rowGap={2}
        sx={{ padding: 1, alignContent: "center", alignItems: "center", marginBottom : '20px' }}
      >
        <Grid item>
          <StatusBox />
        </Grid>
        <Grid item>
          <StatusBox />
        </Grid>
        <Grid item>
          <StatusBox />
        </Grid>

        <Grid item>
          <StatusBox />
        </Grid>
      </Grid>

      {/* Commands Select */}
      <Typography variant="h4" gutterBottom>Commands</Typography>
      <CommandSelect />
    </div>
  );
}
