import { useParams } from "react-router-dom";
import DatabaseBreadCrumbs from "../DatabaseBreadCrumbs";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import DynamicForm from "./DynamicForm";

export default function DatabaseForm() {
  const { table, id } = useParams();
  const [schema, setSchema] = useState(null);
  // console.log(table, id)
  const { options, post } = useAxios();

  useEffect(() => {
    const fetchOptions = async () => {
      const res = await options("/" + table + "s");
      setSchema(res.actions.POST);
    };
    fetchOptions();
  }, []);

  console.log(schema);

  const handleSubmit = async (formData) => {
    console.log("post data");
    console.log(formData);
    // try {
    //   // Make a POST request with the form data
    //   const response = await axios.post('/api/your_endpoint', formData);
    //   console.log('Form submitted successfully:', response.data);
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    // }
  };
  // console.log(schema);

  return (
    <>
      <DatabaseBreadCrumbs />
      {id ? (
        <Typography variant="h6">You are editing {id} row.</Typography>
      ) : (
        // <Typography variant="h6">You are creating a new row.</Typography>
        <>{schema && <DynamicForm schema={schema} onSubmit={handleSubmit} />}</>
      )}
    </>
  );
}
