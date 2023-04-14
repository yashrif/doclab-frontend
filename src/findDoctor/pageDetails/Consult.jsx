import React from "react";
import { Stack } from "@chakra-ui/react";

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
    <Stack
      spacing="2rem"
      w="100%"
      h="100%"
      overflowY="scroll"
      p="1.2rem 3.2rem"
      mt="1.6rem"
      mb="1.6rem"
      direction="column"
    >
      {renderedList}
    </Stack>
  );
};

export default Consult;
