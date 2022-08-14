import React, { useState } from "react";
import MainContainer from "../reusable/MainContainer.jsx";
import Header from "../reusable/Header.jsx";
import PageOverview from "../reusable/pageOverview/PageOverview.jsx";
import PageDetails from "../reusable/pageDetails/PageDetails.jsx";

const FindDoctor = () => {
  const category = "doctor";

  const [selectedPerson, setSelectedPerson] = useState(null);

  return (
    <>
      <Header />
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
