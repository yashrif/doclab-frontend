import React from "react";
// import { faker } from "@faker-js/faker";
import theme from "../../styling/theme.jsx";

const style = {
  analyticSpan: {
    color: "#333",
    fontWeight: "500",
    marginRight: "0.4rem",
  },
  ionIcon: {
    color: `${theme.typography.colors.primaryFirst.primary}`,
    fontSize: "1.4rem",
    padding: ".4rem",
    borderRadius: "50%",
    backgroundColor: "rgba(166, 216, 255, 0.5)",
    "--ionicon-stroke-width": "4.8rem",
  },

  iconAndText: {
    fontSize: "1.4rem",
    display: "flex",
    gap: "1.2rem",
    alignItems: "center",
  },
};

const PageSummary = ({
  category,
  displayDescription,
  // numberOfPatients,
  numberOfPerson,
}) => {
  return (
    <>
      <style>
        {`
          @keyframes fade-out {
            0% {
              opacity: 0.5;
            }
            100% {
              opacity: 1;
            }
          }
        `}
      </style>
      {/* <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridGap: "1.2rem",
          alignItems: "center",
          marginBottom: "1.6rem",
        }}
      >
        <img
          style={{ height: "4.8rem", width: "auto", borderRadius: "0.9rem" }}
          src={faker.image.avatar()}
          alt="Page logo"
        />
        <p
          style={{
            justifySelf: "right",
            fontSize: "1.4rem",
            fontWeight: "400",
          }}
        >
          <span style={{ color: "#333", fontWeight: "500" }}>
            {numberOfPatients - 1}+
          </span>{" "}
          Patients
        </p>
      </div> */}

      {displayDescription && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
            marginBottom: "1.6rem",
            animation: "fade-out .3s ease-in",
          }}
        >
          <h2
            style={{
              color: `${theme.typography.colors.primaryFirst.primary}`,
              fontSize: "1.8rem",
              fontWeight: "500",
              letterSpacing: "-0.05rem",
              lineHeight: "1.1",
            }}
          >
            DocLab
          </h2>
          <p
            className="analytics-container"
            style={{
              fontSize: "1.4rem",
              lineHeight: "1.5",
              letterSpacing: "0.025rem",
            }}
          >
            Velit veniam dolor saepe similique pariatur. Voluptas quis doloribus
            fugit inventore et architecto.
          </p>
        </div>
      )}

      {displayDescription && (
        <div
          className="analytics-container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1.2rem",
          }}
        >
          <div style={style.iconAndText}>
            <ion-icon style={style.ionIcon} name="people-outline"></ion-icon>
            <p>
              <span style={style.analyticSpan}>
                {numberOfPerson > 0 ? numberOfPerson : "..."}
              </span>
              {[category.slice(0, 1).toUpperCase(), category.slice(1)].join(
                ""
              ) + "s"}
            </p>
          </div>

          <div style={style.iconAndText}>
            <ion-icon style={style.ionIcon} name="location-outline"></ion-icon>
            <p>
              <span style={style.analyticSpan}>65+</span>Districts
            </p>
          </div>

          {/* <div style={style.iconAndText}>
            <ion-icon style={style.ionIcon} name="time-outline"></ion-icon>
            <p>
              <span style={style.analyticSpan}>24/7</span>Available
            </p>
          </div> */}
        </div>
      )}
    </>
  );
};

export default PageSummary;
