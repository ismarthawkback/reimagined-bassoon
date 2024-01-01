import { useParams } from "react-router-dom";
import DatabaseBreadCrumbs from "../DatabaseBreadCrumbs";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import DynamicForm from "./DynamicForm";

export default function DatabaseForm() {
  const { table, id } = useParams();
  const [schema, setSchema] = useState(null);
  const [formMessage, setFormMessage] = useState(null);
  const [data, setData] = useState(null);
  // console.log(table, id)
  const { options, post, get, put } = useAxios();

  useEffect(() => {
    const fetchOptions = async () => {
      const res = await options("/" + table + "s");
      setSchema(res.actions.POST);
    };

    const fetchData = async () => {
      const res = await get(`/${table}s/${id}`);
      console.log(res);
      setData({ ...res });
    };
    fetchOptions();
    if (id) {
      fetchData();
    }
  }, []);

  console.log(schema);

  const handleSubmit = async (formData) => {
    console.log("post data");
    if (!id) {
      try {
        await post(`/${table}s/`, formData);
        setFormMessage("Success");
      } catch (err) {
        console.log("Error");
        setFormMessage("Check Fields");
      }
    } else {
      try {
        console.log("tried update");
        console.log(formData);
        await put(`/${table}s/${id}/`, formData);
        setFormMessage("Success");
      } catch (err) {
        console.log("error while update");
        setFormMessage("check Fields");
      }
    }
  };

  return (
    <>
      <DatabaseBreadCrumbs />
      {id ? (
        <>
          <Typography variant="h6">You are editing {id} row.</Typography>
          {schema && data && (
            <DynamicForm
              schema={schema}
              onSubmit={handleSubmit}
              formMessage={formMessage}
              data={data}
            />
          )}
        </>
      ) : (
        // <Typography variant="h6">You are creating a new row.</Typography>
        <>
          {schema && (
            <DynamicForm
              schema={schema}
              onSubmit={handleSubmit}
              formMessage={formMessage}
              data={{}}
            />
          )}
        </>
      )}
    </>
  );
}
