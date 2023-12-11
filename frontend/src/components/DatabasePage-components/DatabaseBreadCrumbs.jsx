import React from "react";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";

Object.defineProperty(String.prototype, "capitalize", {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false,
});

function DatabaseBreadCrumbs() {
  const location = useLocation();
  const { table: tableName } = useParams();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <div>
      <Breadcrumbs
        sx={{
          marginBottom: 2,
        }}
        aria-label="breadcrumb"
      >
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <Typography color="textPrimary" key={name}>
              {name.capitalize()}
            </Typography>
          ) : (
            <Link to={routeTo} key={name} style={{
              textDecoration : 'none',
              color : 'inherit'
            }}>
              {name.capitalize()}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}

export default DatabaseBreadCrumbs;
