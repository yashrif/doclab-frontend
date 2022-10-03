import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import theme from "../../styling/theme.jsx";

const Accordion = ({ selectedPerson, category, number }) => {
  const [isOpen, setisOpen] = useState(false);

  console.log(number, isOpen);

  return (
    <>
      <style>
        {`
          @keyframes slide-down {
            0% {
              opacity: 0;
              transform: translateY(-2rem);
            }
            100% {
              opacity: 1;
              transform: translateY(0rem);
            }
          }
          .slide-down {
            animation: slide-down .15s ease-in-out;
         }
      `}
      </style>
      <div
        role={"button"}
        tabIndex={number}
        onClick={() => setisOpen(!isOpen)}
        onKeyDown={() => {}}
        style={{
          padding: "2.2rem 2.4rem 2.4rem",
          borderRadius: ".9rem  ",
          boxShadow: "0 0 1.6rem rgba(0, 0, 0, 0.08)",
          borderTop: `.4rem solid ${
            isOpen
              ? theme.typography.colors.primaryFirst.tints[0]
              : "transparent"
          }`,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr auto",
            columnGap: "1.6rem",
            rowGap: "1.2rem",
            // justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontWeight: `${isOpen ? "600" : "500"}`,
              fontSize: "1.6rem",
              color: isOpen
                ? theme.typography.colors.primaryFirst.tints[0]
                : "#cad0d6",
              letterSpacing: ".1rem",
            }}
          >
            {String(number).padStart(2, 0)}
          </span>
          <h3
            style={{
              fontSize: "1.6rem",
              fontWeight: `${isOpen ? "600" : "500"}`,

              color: isOpen
                ? theme.typography.colors.primaryFirst.tints[0]
                : "#333",
            }}
          >
            {faker.lorem.sentence()}
          </h3>
          <ion-icon
            style={{
              fontSize: "2rem",
              letterSpacing: ".25rem",
              color: theme.typography.colors.primaryFirst.tints[0],
            }}
            name={`chevron-${isOpen ? "up" : "down"}-outline`}
          ></ion-icon>
          {/* <p style={{ fontSize: "1.2rem", fontWeight: "500" }}>
          {Math.floor(Math.random() * 5)} Years
        </p> */}

          <div
            className={`${isOpen ? "slide-down" : ""}`}
            style={{
              gridColumn: "2",
              display: `${isOpen ? "block" : "none"}`,
            }}
          >
            <p
              style={{
                fontSize: "1.4rem",
                lineHeight: "1.4",
                marginBottom: "2.4rem",
              }}
            >
              {faker.lorem.paragraph(3)}
            </p>

            <div style={{ marginLeft: "0rem" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  columnGap: "1.2rem",
                  rowGap: ".8rem",
                  alignItems: "center",
                }}
              >
                <div>
                  <ion-icon
                    style={{
                      transform: "rotateX(180deg)",
                      fontSize: "2rem",
                      color: theme.typography.colors.primaryFirst.tints[0],
                    }}
                    name="arrow-redo-outline"
                  ></ion-icon>
                </div>
                <h3
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: "500",
                    letterSpacing: ".015rem",
                  }}
                >
                  {selectedPerson[`${category}Name`]}
                </h3>
                <p
                  style={{
                    gridColumn: "2",
                    fontSize: "1.4rem",
                    lineHeight: "1.4",
                  }}
                >
                  {faker.lorem.paragraph(5)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
