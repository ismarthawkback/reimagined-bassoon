import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material"; // Import appropriate Material UI components for date and time pickers
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const DynamicForm = ({ schema, onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (fieldName, value) => {
    const updatedFormData = { ...formData, [fieldName]: value };
    setFormData(updatedFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        {Object.keys(schema).map((fieldName) => (
          <Grid item xs={12} key={fieldName}>
            {schema[fieldName].type === "datetime" ? (
              <DateTimePicker
                label={schema[fieldName].label}
                inputVariant="outlined"
                value={formData[fieldName] || null}
                onChange={(value) => handleChange(fieldName, value)}
                fullWidth
              />
            ) : (
              <TextField
                label={schema[fieldName].label}
                type={schema[fieldName].type === "integer" ? "number" : "text"}
                required={schema[fieldName].required}
                value={formData[fieldName] || ""}
                onChange={(e) => handleChange(fieldName, e.target.value)}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            )}
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default DynamicForm;
