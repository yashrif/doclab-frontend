import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
// import FindDoctor from "./findDoctor/FindDoctor.jsx";
import DoctorDashboard from "./doctorDashboard/Dashboard.jsx";
import theme from "./styling/theme.jsx";
import "./styling/style.css";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <div
        style={{
          // maxWidth: "150rem",
          height: "100vh",
          margin: "0 auto",
          background: `linear-gradient(
          155deg,
          rgba(200, 200, 200, .15),
          rgba(180, 180, 180, .2),
          rgba(180, 180, 180, .25),
          rgba(28, 127, 214, 0.15),
          rgba(28, 127, 214, 0.5)
          )`,
        }}
      >
        {/* <FindDoctor /> */}
        <DoctorDashboard />
      </div>
    </ChakraProvider>
  );
};

export default App;
