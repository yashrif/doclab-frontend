import React, { useState } from "react";
// import { faker } from "@faker-js/faker";
import theme from "../../styling/theme.jsx";

const TODAY = new Date();
const TOMORROW = new Date();
TOMORROW.setDate(TOMORROW.getDate() + 1);
const dateFormat = {
  // weekday: "short",
  month: "short",
  day: "numeric",
};

const TimeSlot = ({ category, selectedPerson }) => {
  const [incrementDate, setIncrementDate] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const style = {
    icon: {
      fontSize: "1.4rem",
      "--ionicon-stroke-width": "4.8rem",
    },

    iconRounded: {
      padding: ".4rem",
      borderRadius: "50%",
    },

    iconAndText: {
      display: "flex",
      alignItems: "center",
      gap: ".8rem",
    },
    span: {
      fontColor: "#333",
      fontWeight: "600",
      marginRight: ".4rem",
    },
  };

  console.log("rendered");

  let date = new Date();
  date.setDate(date.getDate() + incrementDate);
  let renderedDate = [];
  for (let i = 0; i < 1; i++) {
    if (i) date.setDate(date.getDate() + 1);

    renderedDate.push(
      <p
        style={{
          borderBottom:
            selectedDate.getDate() === date.getDate()
              ? "1px solid blue"
              : "none",
          color: selectedDate.getDate() === date.getDate() ? "#333" : "#555",
          fontWeight: selectedDate.getDate() === date.getDate() ? "600" : "500",
          paddingBottom: ".3rem",
        }}
        key={i}
      >
        {date.getDate() === TODAY.getDate()
          ? "Today"
          : date.getDate() === TOMORROW.getDate()
          ? "Tomorrow"
          : date.toLocaleDateString("en-US", dateFormat)}
      </p>
    );
  }

  return (
    <div
      style={{
        fontSize: "1.4rem",
        padding: "1.6rem 1.6rem",
        backgroundColor: `${theme.typography.colors.background.personCard}`,
        borderRadius: "1.1rem",
        borderBottomRightRadius: "1.1rem",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{ fontSize: "1.4rem", marginBottom: ".4rem" }}>
          {selectedPerson[`${category}ClinicName`]}
        </h3>

        {/* <p
          style={{
            color: "#767676",
            fontSize: "1rem",
            marginBottom: "1rem",
            letterSpacing: "0.05rem",
          }}
        >
          {`Time slots`.toUpperCase()}
        </p> */}
      </div>

      <div style={{ display: "flex", gap: "1.6rem", marginBottom: ".8rem" }}>
        <div
          style={{
            fontSize: "1.2rem",
            marginBottom: ".6rem",
          }}
        >
          <p>
            <span style={{ marginRight: ".2rem" }}>&#2547;</span>
            <span style={{ ...style.span, margin: "0" }}>
              {selectedPerson[`${category}VisitingFee`]}
            </span>
          </p>
        </div>
      </div>

      {/* <p style={{ fontSize: "1.2rem" }}>
              {theme.methods.capitalize(selectedPerson[`${category}SubDistrict`])}
            </p> */}

      <div>
        <div
          style={{
            fontSize: "1.3rem",
            display: "flex",
            gap: "1.2rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ion-icon
            role={"button"}
            tabIndex={0}
            onClick={() => {
              if (incrementDate > 0) {
                setIncrementDate(incrementDate - 1);
              }
              if (selectedDate.getDate() !== TODAY.getDate()) {
                let tempDate = new Date();
                tempDate.setDate(selectedDate.getDate() - 1);
                setSelectedDate(tempDate);
              }
            }}
            style={{
              ...style.icon,
              ...style.iconRounded,
              fontSize: "1.2rem",
              padding: ".4rem",
              color: "#fff",
              backgroundColor: "rgba(28, 126, 214, .70)",
              boxShadow: "0 .4rem .4rem rgba(0, 0, 0, .15)",
              cursor: "pointer",
            }}
            name="chevron-back-outline"
          ></ion-icon>
          {renderedDate}
          <ion-icon
            role={"button"}
            tabIndex={0}
            onClick={() => {
              if (selectedDate.getDate() !== TODAY.getDate())
                setIncrementDate(incrementDate + 1);
              let tempDate = new Date();
              tempDate.setDate(selectedDate.getDate() + 1);
              setSelectedDate(tempDate);
            }}
            style={{
              ...style.icon,
              ...style.iconRounded,
              fontSize: "1.2rem",
              padding: ".4rem",
              color: "#fff",
              backgroundColor: "rgba(28, 126, 214, .70)",
              boxShadow: "0 .4rem .4rem rgba(0, 0, 0, .15) ",
              cursor: "pointer",
            }}
            name="chevron-forward-outline"
          ></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default TimeSlot;
