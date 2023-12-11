import { Box, Paper, Stack, Typography, IconButton } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from "react-router-dom";

function TableBox({tableName}) {
    const navigate = useNavigate()
    return (
        <>
            <Paper elevation={2} sx={{
                minWidth : '320px',
                padding : '15px'
            }}>
                <Stack direction='row' sx={{
                    alignItems : 'center'
                }}>

                <Typography variant='h6' gutterBottom sx={{
                    flexGrow : 1,
                }}>

                {tableName}
                </Typography>
                <IconButton size="large" onClick={() => navigate(`${tableName}`)}>
                    <ArrowForwardIosIcon color='primary'/>
                </IconButton>

                </Stack>
            </Paper>
        </>
    )
}

export default TableBox;