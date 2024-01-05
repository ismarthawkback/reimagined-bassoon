import React, { useState, useReducer, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  Snackbar,
  Box,
} from "@mui/material"; // Import appropriate Material UI components for date and time pickers
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import FileUpload from "./FileUpload";

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.fieldName]: action.value };
    // Add more cases for other actions if needed
    default:
      return state;
  }
};

const DynamicForm = ({
  schema,
  onSubmit,
  formMessage,
  setFormMessage,
  data,
}) => {
  const [formData, dispatch] = useReducer(formReducer, { ...data });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  // get params
  const k = useParams();
  console.log(k);
  // Handle field changes by dispatching an action
  const handleChange = (fieldName, value) => {
    dispatch({ type: "UPDATE_FIELD", fieldName, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const renderField = (fieldName, fieldData) => {
    if (fieldName === "id") {
      return <></>;
    }
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

  useEffect(() => {
    if (formMessage) {
      setSnackbarMessage(formMessage);
      setSnackbarOpen(true);

      if (formMessage === "Success") {
        setTimeout(() => {
          setSnackbarOpen(false);
          // console.log("Hello World");
          window.history.back(); // Go back to the previous page
        }, 2000); // Delay for 2 seconds before hiding the Snackbar and going back
      }
    }
  }, [formMessage]);

  return (
    <>
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
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000} // Hides after 2 seconds
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
      />

      {!("id" in k) && <FileUpload setFormMessage={setFormMessage} />}
    </>
  );
};

export default DynamicForm;
