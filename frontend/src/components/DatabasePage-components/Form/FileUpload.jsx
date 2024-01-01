import React, { useState } from "react";
import Papa from "papaparse";
import useAxios from "../../../hooks/useAxios";
import { useParams } from "react-router-dom";

import { Button, Grid, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const FileUpload = ({ setFormMessage }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { post, options } = useAxios();
  const { table } = useParams();

  const handleFileChange = (event) => {
    // Get the selected file from input
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      const text = event.target.result;
      const parsedData = Papa.parse(text, {
        header: true,
      });

      try {
        // Post the entire parsed CSV data as bulk operation to the backend
        await post(`/${table}s/add_multiple_rows/`, parsedData.data);

        // Handle success
        console.log("CSV data posted:", parsedData.data);
        setFormMessage("Success");
      } catch (error) {
        // Handle error
        console.error("Error posting CSV data:", error);
        setFormMessage("Invalid Data");
      }
    };
    reader.readAsText(selectedFile);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <input
          accept=".csv"
          style={{ display: "none" }}
          id="contained-button-file"
          type="file"
          onChange={handleFileChange}
        />
        <label htmlFor="contained-button-file">
          <Button
            variant="contained"
            component="span"
            startIcon={<CloudUploadIcon />}
          >
            Choose CSV File
          </Button>
        </label>
      </Grid>
      <Grid item xs={12}>
        {selectedFile && (
          <Typography variant="body1">
            Selected File: {selectedFile.name}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpload}
          disabled={!selectedFile}
        >
          Upload
        </Button>
      </Grid>
    </Grid>
  );
};

export default FileUpload;
