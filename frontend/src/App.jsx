import Typography from "@mui/material/Typography";
import { ThemeContext } from "./contexts/ThemeContext";
import { useContext } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import ThemeToggle from "./components/navbar-components/ThemeToggle";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import DatabasePage from "./pages/DatabasePage";
import DatabaseTables from "./components/DatabasePage-components/Home/DatabaseTables";
import DatabaseTable from "./components/DatabasePage-components/Table/DatabaseTable";
import DatabaseForm from "./components/DatabasePage-components/Form/DatabaseForm";

import ProtectedRoute from "./utils/ProtectedRoute";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const appTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  return (
    <>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <AuthContextProvider>
          <Navbar />
          <Routes>
            <Route
              path=""
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            >
              <Route path="database" element={<DatabasePage />}>
                <Route path="" element={<DatabaseTables />} />
                <Route path=":table" element={<DatabaseTable />} />
                <Route path=":table/new" element={<DatabaseForm />} />
                <Route path=":table/:id" element={<DatabaseForm />} />
              </Route>
            </Route>
            <Route path="login" element={<LoginPage />} />

            {/* <Route path="" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="database" element={<DatabasePage />}>
            <Route path="" element={<DatabaseTables />} />
            <Route path=":table" element={<DatabaseTable />} />
            <Route path=":table/new" element={<DatabaseForm />} />
            <Route path=":table/:id" element={<DatabaseForm />} />
          </Route> */}
          </Routes>
          {/* <DatabasePage /> */}
          {/* <LoginPage />
      <HomePage /> */}

          {/* <ThemeToggle /> */}
        </AuthContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
