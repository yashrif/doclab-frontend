import React from "react";
import theme from "../../styling/theme.jsx";

const Info = ({ selectedPerson, category }) => {
  let starIcon = [];
  for (let i = 0; i < Math.floor(selectedPerson[`${category}Rating`]); i++) {
    starIcon.push(
      <ion-icon
        key={i + 1}
        style={{
          color: "#fab005",
        }}
        name="star"
      ></ion-icon>
    );
  }

  if (!Number.isInteger(selectedPerson[`${category}Rating`]))
    starIcon.push(
      <ion-icon
        key={Math.floor(selectedPerson[`${category}Rating`]) + 1}
        style={{
          color: "#fab005",
        }}
        name="star-half"
      ></ion-icon>
    );

  return (
    <div
      style={{
        padding: "4.8rem 8.6rem",
        display: "flex",
        // gridTemplateColumns: "1.5fr 1fr 1.5fr",
        rowGap: "2.4rem",
        // columnGap: "3.6rem",
        justifyContent: "space-between",
      }}
    >
      <div>
        <p
          style={{
            fontSize: "1.6rem",
            fontWeight: "500",
            marginBottom: "2rem",
          }}
        >
          {selectedPerson[`${category}SubDistrict`]}
        </p>

        <div
          style={{
            fontSize: "1.4rem",
            display: "flex",
            gap: "1.2rem",
            alignItems: "center",
            marginBottom: "1.2rem",
          }}
        >
          <span style={{ fontWeight: "500" }}>
            {selectedPerson[`${category}Rating`]}
          </span>
          <div
            style={{
              display: "flex",
              gap: ".4rem",
              alignItems: "center",
            }}
          >
            {starIcon}
          </div>
        </div>

        <p
          style={{
            fontSize: "1.6rem",
            fontWeight: "500",
            color: `${theme.typography.colors.primaryFirst.primary}`,
            marginBottom: ".6rem",
          }}
        >
          {selectedPerson[`${category}ClinicName`]}
        </p>

        <p
          style={{
            fontSize: "1.6rem",
            marginBottom: "2rem",
            lineHeight: "1.6",
          }}
        >
          {selectedPerson[`${category}Location`]}
        </p>

        {/* <p
          style={{
            fontSize: "1.4rem",
            fontWeight: "500",
            color: `${theme.typography.colors.primaryFirst.primary}`,
          }}
        >
          location on google map
        </p> */}
      </div>
      <div>
        <p
          style={{
            fontSize: "1.6rem",
            fontWeight: "500",
            marginBottom: "1rem",
          }}
        >
          Sat &mdash; Fri
        </p>
        <p
          style={{
            fontSize: "1.4rem",
            marginBottom: "1.6rem",
          }}
        >
          07:00 AM &mdash; 10:00 PM
        </p>
        <p
          style={{
            fontSize: "1.4rem",
            color: "#777",
          }}
        >
          Check calender for more info
        </p>
      </div>
      <div>
        <p
          style={{
            fontSize: "1.6rem",
            fontWeight: "500",
            marginBottom: ".4rem",
          }}
        >
          <span style={{ marginRight: ".2rem" }}>&#2547;</span>
          {selectedPerson[`${category}VisitingFee`]}
        </p>
        <p style={{ fontSize: "1.4rem", color: "#777", marginBottom: "2rem" }}>
          For new patient
        </p>
        <p
          style={{
            fontSize: "1.6rem",
            fontWeight: "500",
            marginBottom: ".4rem",
          }}
        >
          <span style={{ marginRight: ".2rem" }}>&#2547;</span>
          {parseInt(selectedPerson[`${category}VisitingFee`] * 2) / 3}
        </p>
        <p style={{ fontSize: "1.4rem", color: "#777" }}>For old patient</p>
      </div>
    </div>
  );
};

export default Info;
