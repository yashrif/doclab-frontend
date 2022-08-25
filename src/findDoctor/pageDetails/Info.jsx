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
        padding: "2.4rem 4.8rem",
        display: "grid",
        gridTemplateColumns: "1.5fr 1fr 1.5fr",
        rowGap: "2.4rem",
        columnGap: "1.6rem",
        justifyContent: "space-between",
      }}
    >
      <p
        style={{
          fontSize: "1.6rem",
          gridColumn: "1 / -1",
        }}
      >
        {selectedPerson[`${category}SubDistrict`]}
      </p>
      <div>
        <p
          style={{
            fontSize: "1.6rem",
            fontWeight: "600",
            color: `${theme.typography.colors.primaryFirst.primary}`,
            marginBottom: ".8rem",
          }}
        >
          {selectedPerson[`${category}ClinicName`]}
        </p>
        <div
          style={{
            fontSize: "1.4rem",
            display: "flex",
            gap: "1.2rem",
            alignItems: "baseline",
            marginBottom: ".8rem",
          }}
        >
          <span style={{ fontWeight: "600" }}>
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
            marginBottom: "1.2rem",
            lineHeight: "1.6",
          }}
        >
          {selectedPerson[`${category}Location`]}
        </p>
        <p
          style={{
            fontSize: "1.4rem",
            fontWeight: "500",
            color: `${theme.typography.colors.primaryFirst.primary}`,
          }}
        >
          location on google map
        </p>
      </div>
      <div
        style={{
          fontSize: "1.4rem",
          fontWeight: "600",
        }}
      >
        Schedule
      </div>
      <div
        style={{
          fontSize: "1.4rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.6rem",
        }}
      >
        <p>
          <span style={{ marginRight: ".2rem" }}>&#2547;</span>
          {selectedPerson[`${category}VisitingFee`]}
        </p>
        <p>payment info</p>
      </div>
    </div>
  );
};

export default Info;
