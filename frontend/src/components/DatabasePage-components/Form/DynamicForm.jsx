import React, { useState, useReducer } from "react";
import {
  TextField,
  Button,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material"; // Import appropriate Material UI components for date and time pickers
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.fieldName]: action.value };
    // Add more cases for other actions if needed
    default:
      return state;
  }
};

const DynamicForm = ({ schema, onSubmit }) => {
  const [formData, dispatch] = useReducer(formReducer, {});

  // Handle field changes by dispatching an action
  const handleChange = (fieldName, value) => {
    dispatch({ type: "UPDATE_FIELD", fieldName, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const renderField = (fieldName, fieldData) => {
    if (fieldData.type === "choice") {
      return (
        <div key={fieldName}>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id={`${fieldName}-label`}>{fieldData.label}</InputLabel>
            <Select
              labelId={`${fieldName}-label`}
              id={fieldName}
              value={formData[fieldName] || ""}
              onChange={(e) => handleChange(fieldName, e.target.value)}
              label={fieldData.label}
            >
              {fieldData.choices.map((choice) => (
                <MenuItem key={choice.value} value={choice.value}>
                  {choice.display_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      );
    } else if (fieldData.type === "datetime") {
      return (
        <DateTimePicker
          label={schema[fieldName].label}
          inputVariant="outlined"
          value={formData[fieldName] || null}
          onChange={(value) => handleChange(fieldName, value)}
          fullWidth
        />
      );
    } else {
      // Render regular text or number input fields for other types
      return (
        <div key={fieldName}>
          <TextField
            label={fieldData.label}
            type={fieldData.type === "integer" ? "number" : "text"}
            required={fieldData.required}
            value={formData[fieldName] || ""}
            onChange={(e) => handleChange(fieldName, e.target.value)}
            fullWidth
            variant="outlined"
            margin="normal"
          />
        </div>
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        {Object.entries(schema).map(([fieldName, fieldData]) => (
          <Grid item xs={12} key={fieldName}>
            {renderField(fieldName, fieldData)}
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
