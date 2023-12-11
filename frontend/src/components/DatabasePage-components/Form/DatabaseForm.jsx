import { useParams } from "react-router-dom";
import DatabaseBreadCrumbs from "../DatabaseBreadCrumbs";
import { Typography } from "@mui/material";

export default function DatabaseForm() {
    const {table, id} = useParams()
    // console.log(table, id)

    if(id == undefined) {
        console.log('New form')
    } else {
        console.log(table + ' and ' + id)
    }
    return (
      <>
        <DatabaseBreadCrumbs />
        {id ? (
          <Typography variant="h6">You are editing {id} row.</Typography>
        ) : (
          <Typography variant="h6">You are creating a new row.</Typography>
        )}
      </>
    );
}