import { Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'



export default function LoginInfo() {
  return (
    <>
    
      <Box
      sx={{
        flex: 1,
      }}
      >
        <Stack spacing={3} sx={{justifyContent : 'center', alignContent : 'center', alignItems : 'center', padding : 4}}>
            <img src='/cdot_logo_full.png' style={{width : '200px', height : '150px',  objectFit : 'contain'}}/>
            <Typography variant='h5'>CDOT VoIP Solution</Typography>
            <Typography variant='body1' sx={{textAlign : 'center'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium commodi libero maiores, expedita corporis, ea dolores architecto ipsam, voluptatibus fugit non asperiores corrupti repellat debitis soluta velit? Deserunt, corrupti earum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi mollitia id dolorum inventore sit amet ut tempora totam possimus fugit delectus voluptatibus, quibusdam odio magni ex autem odit at.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem tempore aliquid nesciunt esse illum quo quisquam, labore sit ullam saepe vel minus dolore quae excepturi ad nulla quos libero fugit.
            </Typography>
        </Stack>
      </Box>
      
      
    </>
  );
}
