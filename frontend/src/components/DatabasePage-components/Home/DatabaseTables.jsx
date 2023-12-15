import { Box, Breadcrumbs, Paper, Typography } from "@mui/material";
import { Link, Grid } from "@mui/material";
import TableBox from "./TableBox";
import { Outlet } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import { useEffect, useState } from "react";

const tables = [
  "Call-Records",
  "SIP-Friends",
  "Voice-Mails",
  "Voicemail-Users",
];

function DatabaseTables() {
  const [tables, setTables] = useState([]);
  const { get } = useAxios();

  useEffect(() => {
    const fetchTables = async () => {
      const tables = await get("/models");
      // console.log(tables);
      setTables(tables);
    };
    fetchTables();
  }, []);

  return (
    <>
      <Box
        sx={{
          padding: 1,
          margin: 2,
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
          {tables.map((table, index) => (
            <Grid item key={index}>
              <TableBox tableName={table.model} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default DatabaseTables;
