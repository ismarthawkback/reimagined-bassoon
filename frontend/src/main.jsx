import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ThemeContextProvider from "./contexts/ThemeContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </BrowserRouter>,
);
