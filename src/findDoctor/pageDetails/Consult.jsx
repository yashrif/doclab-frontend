import React from "react";
import Accordion from "./Accordion.jsx";

const Consult = ({ selectedPerson, category }) => {
  let renderedList = [];

  for (let i = 0; i < 10; i++) {
    renderedList.push(
      <Accordion
        key={i + 1}
        selectedPerson={selectedPerson}
        category={category}
        number={i + 1}
      />
    );
  }

  return (
    <div
      style={{
        height: "100%",
        margin: "1.6rem 0",
        padding: "1.2rem 3.2rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        overflowY: "scroll",
      }}
    >
      {renderedList}
    </div>
  );
};

export default Consult;
