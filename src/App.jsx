import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Homepage from "./homepage/Homepage.jsx";
import FindDoctor from "./findDoctor/FindDoctor.jsx";
import DoctorDashboard from "./doctorDashboard/DoctorDashboard.jsx";
import PatientDashboard from "./patientDashboard/PatientDashboard.jsx";
import theme from "./styling/theme.jsx";
import "./styling/style.css";
import "./styling/app.css";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box
        // bg="bgContainer"
        style={{
          // maxWidth: "150rem",
          height: "100vh",
          margin: "0 auto",
          // background: `linear-gradient(
          // 155deg,
          // rgba(200, 200, 200, .15),
          // rgba(180, 180, 180, .2),
          // rgba(180, 180, 180, .25),
          // rgba(28, 127, 214, 0.15),
          // rgba(28, 127, 214, 0.5)
          // )`,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Homepage />} />
            <Route path="/home" exact element={<Homepage />} />
            <Route path="/findDoctor" exact element={<FindDoctor />} />
            <Route
              path="/doctorDashboard/*"
              exact
              element={<DoctorDashboard />}
            />
            <Route
              path="/patientDashboard"
              exact
              element={<PatientDashboard />}
            />
          </Routes>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
};

export default App;
