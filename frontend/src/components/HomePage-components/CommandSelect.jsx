import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { TextareaAutosize, Typography } from '@mui/material';
import { ThemeContext } from '../../contexts/ThemeContext';



const CommandSelect = () => {
const {theme} = useContext(ThemeContext)

const commands = {
    'one' : ['command one', 'command 2', 'command 3', 'command 4'],
    'two' : ['command 2 1', 'command 2 2', 'command 2 3', 'command 2 4']
  }
  const [type, setType] = useState('');
  const [command, setCommand] = useState('');

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleCommandChange = (event) => {
    setCommand(event.target.value);
  };

  const handleGoClick = () => {
    // Handle 'GO' button click logic here
    console.log('Type:', type);
    console.log('Command:', command);
  };

  return (
    <Box sx={{
        padding : 1,
    }}>

    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center'}}>
      <TextField
        select
        label="Type"
        fullWidth
        value={type}
        onChange={handleTypeChange}
        sx={{ width: '25%' }}
        >
        <MenuItem value="" disabled>
          Select a type
        </MenuItem>
        {Object.keys(commands).map((key) => (
            <MenuItem key={key} value={key}>
            {key}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Command"
        fullWidth
        value={command}
        onChange={handleCommandChange}
        sx={{ width: '75%' }}
        >
        <MenuItem value="" disabled>
          Select a command
        </MenuItem>
        {type &&
          commands[type].map((cmd) => (
              <MenuItem key={cmd} value={cmd}>
              {cmd}
            </MenuItem>
          ))}
      </TextField>
      <Button variant="contained" onClick={handleGoClick} disabled={command === ''} sx={{
          borderRadius : 4
        }}>
        GO
      </Button>
    </Box>
    <Box sx={{ height: '400px', flex : 1, overflowX: 'auto',overflowY : "auto", whiteSpace : 'nowrap', backgroundColor: theme === 'light' ? '#000' : '#fff',  margin : 3, borderRadius : 2, padding : 2}}>
        {/* Whilte getting output from the backend, loop it make each one in one typography element to show in a single line. */}
        <Typography variant='body1' sx={{
            color : theme === 'light' ? '#fff' : '#000',
        }}>
            $ Command
        </Typography>
        <Typography variant='body1' sx={{
            color : theme === 'light' ? '#fff' : '#000',
        }}>

        Output is Here
        </Typography>
        

      </Box>
    </Box>
  );
};

export default CommandSelect;
