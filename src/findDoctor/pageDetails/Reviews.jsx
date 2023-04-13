import React from "react";
import { Box } from "@chakra-ui/react";

import Review from "./Review.jsx";

const Reviews = () => {
  let renderedList = [];
  for (let i = 1; i <= 10; i++) {
    renderedList.push(<Review key={i} />);
    if (i !== 10)
      renderedList.push(
        <hr
          key={i + 10}
          style={{
            borderTop: "0.1rem solid #cccccc84",
            borderBottom: "none",
          }}
        />
      );
  }

  return (
    <Box height="100%" overflowY="scroll" margin="1.2rem 0">
      {renderedList}
    </Box>
  );
};

export default Reviews;
