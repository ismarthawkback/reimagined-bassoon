import { Box, Typography } from "@mui/material";
import { Outlet} from 'react-router-dom'

const tables = [
    'Call Records', 'SIP Friends', 'Voice-Mails', 'Voicemail Users' 
]

function DatabasePage() {
  return (
    <>
      <Box
        sx={{
          padding: 1,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Database
        </Typography>
        <Box
          sx={{
            padding: 1,
            margin : 2,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
}

export default DatabasePage;
