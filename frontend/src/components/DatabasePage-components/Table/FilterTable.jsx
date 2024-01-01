import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { IconButton, SpeedDial, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Tune from "@mui/icons-material/Tune";
import { useNavigate, useLocation } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import { useParams } from "react-router-dom";
import Papa from "papaparse";

import SaveIcon from "@mui/icons-material/Save";

const FilterTable = () => {
  const [selectionModel, setSelectionModel] = React.useState([]);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { get, del } = useAxios();
  const { table } = useParams();

  const [rows, setRows] = useState(null);
  const [columns, setColumns] = useState(null);

  const fetchData = async () => {
    const res = await get("/" + table + "s/");
    try {
      const keys = Object.keys(res[0]);
      const generatedColumns = keys.map((key) => ({
        field: key,
        headerName: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize first letter
        width: 200,
      }));

      if (table !== "astcdr") {
        generatedColumns.unshift({
          field: "edit",
          headerName: "Edit",
          width: 50,
          sortable: false,
          filterable: false,
          disableColumnMenu: true,
          renderCell: (params) => (
            <IconButton
              onClick={() => {
                navigate(pathname + "/" + params.row.id);
              }}
              aria-label="edit"
            >
              <EditIcon />
            </IconButton>
          ),
        });
      }

      setColumns(generatedColumns);
      setRows(res);
    } catch (err) {
      setRows(null);
    }
  };

  // console.log(rows);
  useEffect(() => {
    fetchData();
  }, []);

  const handleSaveButtonClick = () => {
    if (selectionModel.length > 0) {
      const selectedRows = rows.filter((row) =>
        selectionModel.includes(row.id),
      );
      const csv = Papa.unparse(selectedRows);

      // Trigger download
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", `${table}_selected.csv`);
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };

  const handleDeleteButtonClick = async () => {
    if (selectionModel.length > 0) {
      try {
        for (const selectedId of selectionModel) {
          await del(`/${table}s/${selectedId}`); // Adjust the API endpoint as per your backend
        }
        // After deletion, refresh the data
        fetchData();
        setSelectionModel([]); // Clear selection after deletion
      } catch (error) {
        console.error("Error deleting rows:", error);
      }
    }
  };

  return (
    <div style={{ height: "65vh", width: "100%" }}>
      {selectionModel.length === 0 && table != "astcdr" ? (
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: "absolute", top: 150, right: 48 }}
          icon={<Tune />}
          direction="left"
        >
          <SpeedDialAction
            icon={<AddIcon />}
            tooltipTitle={"Add Row"}
            onClick={() => {
              navigate(pathname + "/new");
            }}
          />
        </SpeedDial>
      ) : (
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: "absolute", top: 150, right: 48 }}
          icon={<Tune />}
          direction="left"
        >
          <SpeedDialAction
            icon={<DeleteForeverIcon />}
            tooltipTitle={"Delete Rows"}
            onClick={handleDeleteButtonClick}
          />
          <SpeedDialAction
            icon={<SaveIcon />}
            tooltipTitle={"Save Selected"}
            onClick={handleSaveButtonClick}
          />
        </SpeedDial>
      )}
      {rows !== null ? (
        <>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            checkboxSelection
            slots={{
              toolbar: GridToolbar,
            }}
            disableRowSelectionOnClick
            rowSelectionModel={selectionModel}
            onRowSelectionModelChange={setSelectionModel}
          />
        </>
      ) : (
        <Typography variant="h2">Records are empty </Typography>
      )}
    </div>
  );
};

export default FilterTable;
