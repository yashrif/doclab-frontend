import React, { useState } from "react";
import MainContainer from "./MainContainer.jsx";
import Header from "../reusable/Header.jsx";
import PageOverview from "./pageOverview/PageOverview.jsx";
import PageDetails from "./pageDetails/PageDetails.jsx";
import { Box } from "@chakra-ui/react";

const FindDoctor = () => {
  const category = "doctor";

  const [selectedPerson, setSelectedPerson] = useState(null);

  return (
    <>
      <Box bg="bgContainer">
        <Header />
      </Box>
      <MainContainer>
        <PageOverview
          category={category}
          setSelectedPerson={setSelectedPerson}
        />
        {selectedPerson && (
          <PageDetails category={category} selectedPerson={selectedPerson} />
        )}
      </MainContainer>
    </>
  );
};

export default FindDoctor;
