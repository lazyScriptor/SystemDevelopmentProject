import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customers from "./components/Pages/Customers.jsx";
import Sidebar from "./components/Pages/Sidebar.jsx";
import DashboardMain from "./components/Pages/DasboardMain.jsx";
import Equipment from "./components/Pages/Equipment.jsx";
import Inbox from "./components/Pages/Inbox.jsx";
import Invoice from "./components/Pages/Invoice.jsx";
import Reports from "./components/Pages/Reports.jsx";
import Notfoundd from "../additionalcomponents/Notfoundd.jsx";

import { useState, createContext } from "react";

import { ThemeProvider, createTheme } from "@mui/material";
import PrivateRoutes from "./Authorization/PrivavteRoutes.jsx";

export const AppCustomContext = createContext();
export const AppContextAuthProp = createContext();

function App() {
  const [authBool, setAuthBool] = useState("first");
  const [usernamee, setUsernamee] = useState("new dummy data");
  const [rolee, setRolee] = useState("new role data");

  const theme = createTheme({
    // Define your theme here
  });
  return (
    <ThemeProvider theme={theme}>
      <AppContextAuthProp.Provider value={{ authBool, setAuthBool }}>
        <AppCustomContext.Provider
          value={{ usernamee, setUsernamee, rolee, setRolee }}
        >
          <Router>
            <Routes>
              {/* Routes without Sidebar */}
              <Route path="/" element={<Login />} />
              {/* Other routes with Sidebar */}
              <Route
                path="/customers"
                element={
                  <>
                    <PrivateRoutes isAuthorized={true}>
                      <Sidebar />
                      <Customers />
                    </PrivateRoutes>
                  </>
                }
              />
              <Route
                path="/DashboardMain"
                element={
                  <>
                    <PrivateRoutes isAuthorized={true}>
                      <Sidebar />
                      <DashboardMain />
                    </PrivateRoutes>
                  </>
                }
              />
              <Route
                path="/Equipment"
                element={
                  <>
                    <PrivateRoutes isAuthorized={true}>
                      <Sidebar />
                      <Equipment />
                    </PrivateRoutes>
                  </>
                }
              />
              <Route
                path="/Inbox"
                element={
                  <>
                    <PrivateRoutes isAuthorized={true}>
                      <Sidebar />
                      <Inbox />
                    </PrivateRoutes>
                  </>
                }
              />
              <Route
                path="/Invoice"
                element={
                  <>
                    <PrivateRoutes isAuthorized={true}>
                      <Sidebar />
                      <Invoice />
                    </PrivateRoutes>
                  </>
                }
              />
              <Route
                path="/Reports"
                element={
                  <>
                    <PrivateRoutes isAuthorized={true}>
                      <Sidebar />
                      <Reports />
                    </PrivateRoutes>
                  </>
                }
              />
              {/* 404 Route */}
              {/* <Route path="*" element={<Notfoundd />} /> */}
            </Routes>
          </Router>
        </AppCustomContext.Provider>
      </AppContextAuthProp.Provider>
    </ThemeProvider>
  );
}

export default App;
