import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import Search from "../../reusable/Search.jsx";
import theme from "../../styling/theme.jsx";

const SearchContainer = ({ term, setTerm, category }) => {
  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        gap="1.2rem"
        marginBottom="1.2rem"
      >
        <Text
          fontSize="1.5rem"
          lineHeight="1.5"
          fontWeight="600"
          color={`${theme.typography.colors.primaryFirst.primary}`}
        >
          {[category.slice(0, 1).toUpperCase(), category.slice(1)].join("")}
        </Text>
        <Flex
          fontSize="1.5rem"
          lineHeight="1.5"
          alignItems="center"
          gap="0.8rem"
        >
          <Text>
            View:{" "}
            <Text as={"span"} style={{ color: "#333", fontWeight: "500" }}>
              Gender
            </Text>{" "}
          </Text>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </Flex>
      </Flex>
      <Box>
        <Search
          term={term}
          setTerm={setTerm}
          category={category}
          bg="#e9ecef"
        />
      </Box>
    </>
  );
};

export default SearchContainer;
