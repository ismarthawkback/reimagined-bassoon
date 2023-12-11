import React from "react";
import { Box } from "@mui/material";

import DatabaseBreadCrumbs from "../DatabaseBreadCrumbs";
import FilterTable from "./FilterTable";
import { Outlet, Route } from "react-router-dom";

export default function DatabaseTable() {
  return (
    <div>
      <Box
        sx={{
          padding: 1,
          margin: 2,
        }}
      > <Outlet/ >
        <DatabaseBreadCrumbs />
        <FilterTable />
      </Box>
    </div>
  );
}
