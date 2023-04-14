import React, { useEffect, useState } from "react";
import { Box, Stack, keyframes } from "@chakra-ui/react";

import apiGet from "../../hooks/apiGet.jsx";
import PageSummary from "./PageSummary.jsx";
import SearchContainer from "./SearchContainer.jsx";
import PersonList from "./PersonList.jsx";
import theme from "../../styling/theme.jsx";
import { SERVER } from "../../assets/variable/values.js";

const PageOverview = ({ category, setSelectedPerson }) => {
  const [term, setTerm] = useState("");
  const [personList, errorMessage, fetchPersonList] = apiGet([]);
  const [personFilteredList, setPersonFilteredList] = useState(personList);
  const [displayDescription, setDisplayDescription] = useState(true);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    fetchPersonList(`${SERVER}/${category}`, {});
  }, []);

  useEffect(() => {
    if (personList.length > 0) setFirstRender(false);
    setPersonFilteredList(personList);

    setSelectedPerson(personList[0]);
  }, [personList]);

  useEffect(() => {
    setPersonFilteredList(
      personList.filter(({ doctorName }) => {
        return doctorName.toLowerCase().includes(term.toLowerCase());
      })
    );
  }, [term]);

  const slideUp = keyframes`
    from {
    opacity: 0;
    transform: translateY(15rem);
    }
    to {
    opacity: 1;
    transform: translateY(0);
    }
  `;

  const slideDown = keyframes`
    from {
      opacity: 0;
      transform: translateY(-15rem);
    }
    to {
      opacity: 1;
      transform: translateY(0rem);
    }
  `;

  const animationSlideUp = `${slideUp} .3s ease-in-out`;
  const animationSlideDown = `${slideDown} .3s ease-in-out`;

  const slideUpSearch = keyframes`
    from {
      opacity: 0;
      transform: translateY(5rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  const slideDownSearch = keyframes`
    from {
      opacity: 0;
      transform: translateY(-5rem);
    }
    to {
      opacity: 1;
      transform: translateY(0rem);
    }
  `;

  const animationSlideUpSearch = `${slideUpSearch} .3s ease-in-out`;
  const animationSlideDownSearch = `${slideDownSearch} .3s ease-in-out`;

  return (
    <Stack height="100%" minH="60rem">
      <Box
        backgroundColor={`${theme.typography.colors.background.container}`}
        borderRadius="1.1rem"
        boxShadow="0 0 2.4rem rgba(0, 0, 0, .05)"
      >
        <Box margin="2.4rem 2.4rem 1.6rem">
          <Box mb="2rem">
            <PageSummary
              displayDescription={displayDescription}
              category={category}
              numberOfPerson={personFilteredList.length}
              numberOfPatients={500}
            />
          </Box>
          {displayDescription && (
            <hr
              style={{
                borderTop: "0.325rem dotted #ccc",
                borderBottom: "none",
              }}
            />
          )}
          <Box
            animation={`${
              !displayDescription
                ? animationSlideUpSearch
                : animationSlideDownSearch
            }`}
            mt="2rem"
            mb="1.6rem"
          >
            <SearchContainer
              term={term}
              setTerm={setTerm}
              category={category}
            />
          </Box>
        </Box>
      </Box>

      <Box
        animation={`${
          !displayDescription ? animationSlideUp : animationSlideDown
        }`}
        h="100%"
        p="1.2rem 0"
        mt="0.4rem"
        borderRadius="1.1rem"
        bg={`${theme.typography.colors.background.container}`}
        overflow="hidden"
        boxShadow="0 0 2.4rem rgba(0, 0, 0, .05)"
      >
        <PersonList
          personFilteredList={personFilteredList}
          errorMessage={errorMessage}
          firstRender={firstRender}
          category={category}
          setSelectedPerson={setSelectedPerson}
          setDisplayDescription={setDisplayDescription}
        />
      </Box>
    </Stack>
  );
};
export default PageOverview;
