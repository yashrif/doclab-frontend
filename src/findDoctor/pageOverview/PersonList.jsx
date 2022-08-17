import React, { useState, useRef } from "react";
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
    <>
      <style>
        {`
          @keyframes spinner {
            0% {transform: rotate(0deg);}
            100% {transform: rotate(360deg);}
          }
        `}
      </style>
      <div
        ref={scrollListRef}
        onScroll={onScroll}
        style={{ height: "100%", overflowY: "scroll" }}
      >
        {personFilteredList.length > 0 ? (
          <div
            style={{
              margin: "0.8rem 1.2rem 0.8rem 2.4rem",
            }}
          >
            {renderedList}
          </div>
        ) : (
          <div
            style={{
              height: "100%",
              fontSize: "1.8rem",
              fontWeight: "500",
              color: "#333",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {!errorMessage && firstRender && (
              <span
                style={{
                  border: ".3rem solid #ccc",
                  borderTop: `.3rem solid ${theme.typography.colors.primaryFirst.primary}`,
                  borderRadius: "50%",
                  width: "2rem",
                  height: "2rem",
                  marginRight: ".8rem",
                  animation: "spinner .75s linear infinite",
                }}
              ></span>
            )}
            <p style={{ fontWeight: "600" }}>{`${
              errorMessage
                ? "Failed to retrieve data!"
                : firstRender
                ? "Loading..."
                : "No result found!"
            }`}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default PersonList;
