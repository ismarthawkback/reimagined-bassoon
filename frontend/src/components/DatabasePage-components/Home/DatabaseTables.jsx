import { Box, Breadcrumbs, Paper, Typography } from "@mui/material";
import { Link, Grid } from "@mui/material";
import TableBox from "./TableBox";
import { Outlet} from 'react-router-dom'

const tables = [
    'Call-Records', 'SIP-Friends', 'Voice-Mails', 'Voicemail-Users' 
]

function DatabaseTables() {
  return (
    <>
      
        <Box
          sx={{
            padding: 1,
            margin : 2,
          }}
        >
          <Breadcrumbs
            sx={{
              marginBottom: 2,
            }}
          >
            <Typography color={"inherit"}>All Tables</Typography>
          </Breadcrumbs>
          <Grid
            container
            columnSpacing={2}
            rowGap={2}
            sx={{
              padding: 1,
              alignContent: "center",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            {tables.map((tableName, index) => (
                

            <Grid item key={index}> 
              <TableBox tableName={tableName} />
            </Grid>
              
                
            ))}
            
          </Grid>
        </Box>
    </>
  );
}

export default DatabaseTables;
