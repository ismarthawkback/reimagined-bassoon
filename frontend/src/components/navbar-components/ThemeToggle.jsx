import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";
import Switch from "@mui/material/Switch";

export default function ThemeToggle() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <>
      <Switch
        onChange={toggleTheme}
        checked={theme === "dark" ? true : false}
      />
    </>
  );
}
