import React, { useState, useRef } from "react";
import { Box, Text, Spinner } from "@chakra-ui/react";

import theme from "../../styling/theme.jsx";
import PersonCard from "./PersonCard.jsx";

const PersonList = ({
  personFilteredList,
  errorMessage,
  firstRender,
  category,
  setSelectedPerson,
  setDisplayDescription,
}) => {
  const scrollListRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrolledUp, setScrolledUp] = useState(false);
  const [scrollToTop, setScrollToTop] = useState(false);
  const [displayDescriptionStatusChanged, setDisplayDescriptionStatusChanged] =
    useState(false);

  const onScroll = () => {
    !displayDescriptionStatusChanged &&
    scrollListRef.current.scrollTop < scrollPosition
      ? setScrolledUp(true)
      : setScrolledUp(false);

    setDisplayDescriptionStatusChanged(false);

    setScrollPosition(scrollListRef.current.scrollTop);

    if (
      scrollListRef.current &&
      !scrolledUp &&
      scrollListRef.current.scrollTop >=
        scrollListRef.current.scrollHeight * (2 / personFilteredList.length)
    ) {
      setDisplayDescription(false);
      setDisplayDescriptionStatusChanged(true);
      setScrollToTop(true);
    } else if (
      scrollListRef.current &&
      scrolledUp &&
      scrollListRef.current.scrollTop <
        scrollListRef.current.scrollHeight * (2 / personFilteredList.length)
    ) {
      setDisplayDescription(true);
      setDisplayDescriptionStatusChanged(true);
      if (scrollToTop) {
        // setTimeout(() => (scrollListRef.current.scrollTop = 0), 150);
        scrollListRef.current.scrollTop = 0;
        setScrollToTop(false);
      }
    }
  };

  const renderedList = personFilteredList.map((person) => {
    return (
      <PersonCard
        category={category}
        key={person[`${category}ID`]}
        person={person}
        setSelectedPerson={setSelectedPerson}
      />
    );
  });

  return (
    <Box
      ref={scrollListRef}
      onScroll={onScroll}
      height="100%"
      overflowY="scroll"
    >
      {personFilteredList.length > 0 ? (
        <Box margin="0.8rem 1.2rem 0.8rem 2.4rem">{renderedList}</Box>
      ) : (
        <Box
          height="100%"
          fontSize="1.8rem"
          fontWeight="500"
          color="#333"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {!errorMessage && firstRender && (
            <Spinner
              thickness="0.3rem"
              speed="0.75s"
              emptyColor="#ccc"
              color={theme.typography.colors.primaryFirst.primary}
              size="lg"
              mr="0.8rem"
            />
          )}
          <Text fontWeight="600">{`${
            errorMessage
              ? "Failed to retrieve data!"
              : firstRender
              ? "Loading..."
              : "No result found!"
          }`}</Text>
        </Box>
      )}
    </Box>
  );
};

export default PersonList;
