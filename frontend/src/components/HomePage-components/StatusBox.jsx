import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { IconButton, Stack, Paper} from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";

const StatusBox = () => {
  const [status, setStatus] = useState("Status: OK");

  const refreshStatus = () => {
    
    setStatus("Status: Updated"); 
  };

  return (
    <Paper
      elevation={4}
      sx={{
        padding: "10px",
        flex: 1,
        minWidth : "320px",
        border : 1,
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          alignItems: "center",
        }}
      >
        <Typography variant="h6" gutterBottom sx={{flexGrow : 1, mr : '20px'}}>
          Status Check
        </Typography>
        <IconButton size="small" onClick={refreshStatus}>
          <ReplayIcon />
        </IconButton>
      </Stack>
      <Typography variant="body2" sx={{ marginTop: "8px" }}>
        {status}
      </Typography>
    </Paper>
  );
};

export default StatusBox;
