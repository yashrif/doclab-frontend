import React, { useEffect, useState } from "react";
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

  return (
    <>
      <style>
        {`
          @keyframes slide-up {
          0% {
            opacity: 0;
            transform: translateY(15rem);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-down {
          0% {
            opacity: 0;
            transform: translateY(-15rem);
          }
          100% {
            opacity: 1;
            transform: translateY(0rem);
          }
        }

        .slide-up {
          animation: slide-up .3s ease-in-out;
        }

        .slide-down {
          animation: slide-down .3s ease-in-out;
        }

        @keyframes slide-up-search {
          0% {
            opacity: 0;
            transform: translateY(5rem);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-down-search {
          0% {
            opacity: 0;
            transform: translateY(-5rem);
          }
          100% {
            opacity: 1;
            transform: translateY(0rem);
          }
        }

        .slide-up-search {
          animation: slide-up-search .3s ease-in-out;
        }

        .slide-down-search {
          animation: slide-down-search .3s ease-in-out;
        }
        `}
      </style>
      <div
        style={{
          height: "100%",
          minHeight: "60rem",

          display: "flex",
          flexDirection: "column",
          // overflow: "hidden",
        }}
      >
        <div
          style={{
            backgroundColor: `${theme.typography.colors.background.container}`,
            borderRadius: "1.1rem",
            boxShadow: "0 0 2.4rem rgba(0, 0, 0, .05)",
          }}
        >
          <div style={{ margin: "2.4rem 2.4rem 1.6rem" }}>
            <div style={{ marginBottom: "2rem" }}>
              <PageSummary
                displayDescription={displayDescription}
                category={category}
                numberOfPerson={personFilteredList.length}
                numberOfPatients={500}
              />
            </div>
            {displayDescription && (
              <hr
                style={{
                  borderTop: "0.325rem dotted #ccc",
                  borderBottom: "none",
                }}
              />
            )}
            <div
              className={`${
                !displayDescription ? "slide-up-search" : "slide-down-search"
              }`}
              style={{ marginTop: "2rem", marginBottom: "1.6rem" }}
            >
              <SearchContainer
                term={term}
                setTerm={setTerm}
                category={category}
              />
            </div>
          </div>
        </div>

        <div
          className={`${!displayDescription ? "slide-up" : "slide-down"}`}
          style={{
            height: "100%",
            padding: "1.2rem 0",
            marginTop: "0.4rem",
            borderRadius: "1.1rem",
            backgroundColor: `${theme.typography.colors.background.container}`,
            overflow: "hidden",
            boxShadow: "0 0 2.4rem rgba(0, 0, 0, .05)",
          }}
        >
          <PersonList
            personFilteredList={personFilteredList}
            errorMessage={errorMessage}
            firstRender={firstRender}
            category={category}
            setSelectedPerson={setSelectedPerson}
            setDisplayDescription={setDisplayDescription}
          />
        </div>
      </div>
    </>
  );
};
export default PageOverview;
