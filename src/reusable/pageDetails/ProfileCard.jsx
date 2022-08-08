import React from "react";
import { faker } from "@faker-js/faker";
import theme from "../../styling/theme.jsx";

const ProfileCard = ({ category, selectedPerson }) => {
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

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 5fr",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          borderTopLeftRadius: "1.1rem",
          borderBottomLeftRadius: "1.1rem",
        }}
        src={faker.image.avatar()}
        alt={`${category}`}
      />

      <div
        style={{
          fontSize: "1.4rem",
          padding: "1.6rem 3.2rem",
          backgroundColor: `${theme.typography.colors.background.personCard}`,
          borderTopRightRadius: "1.1rem",
          borderBottomRightRadius: "1.1rem",

          display: "flex",
          flexDirection: "column",
          gap: ".8rem",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2
            style={{
              fontSize: "1.8rem",
              color: "#333",
              fontWeight: "600",
              marginBottom: ".8rem",
            }}
          >
            {theme.methods.capitalize(selectedPerson[`${category}Name`])}
          </h2>

          <div style={{ ...style.iconAndText }}>
            <ion-icon
              style={{
                ...style.icon,
                ...style.iconRounded,
                color: "#78290f98",
                backgroundColor: "#bc948775",
              }}
              name="people-outline"
            ></ion-icon>
            <p>
              <span style={{ ...style.span }}>
                {selectedPerson[`${category}ConsultencyCount`]}
              </span>
              Patients
            </p>
          </div>
        </div>

        <div style={{ ...style.iconAndText }}>
          <ion-icon
            style={{
              ...style.icon,
              ...style.iconRounded,
              color: "#fa5252",
              backgroundColor: "#ffc9c985",
            }}
            name="medkit-outline"
          ></ion-icon>
          <p>
            {theme.methods.capitalize(selectedPerson[`${category}Speciality`])}
          </p>
        </div>

        <div style={{ display: "flex", gap: "1.6rem" }}>
          <div style={{ ...style.iconAndText }}>
            <ion-icon
              style={{
                ...style.icon,
                ...style.iconRounded,
                color: "#228be6",
                backgroundColor: "#a5d8ff85",
              }}
              name="school-outline"
            ></ion-icon>
            <p>
              {selectedPerson[`${category}Degrees`].length == 0
                ? "MBBS"
                : selectedPerson[`${category}Degrees`].map(
                    (e) => e.name + ". "
                  )}
            </p>
          </div>

          <div style={{ ...style.iconAndText }}>
            <ion-icon
              style={{
                ...style.icon,
                ...style.iconRounded,
                color: "#7950f2",
                backgroundColor: "#d0bfff85",
              }}
              name="ribbon-outline"
            ></ion-icon>
            <p>{selectedPerson[`${category}Experience`]} Years of experience</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "1.6rem" }}>
          <div style={{ ...style.iconAndText }}>
            <ion-icon
              style={{
                ...style.icon,
                ...style.iconRounded,
                color: "#fab005",
                backgroundColor: "#ffec9985",
              }}
              name="star-outline"
            ></ion-icon>
            <p>
              <span
                style={{
                  ...style.span,
                }}
              >
                {selectedPerson[`${category}Rating`]}
              </span>
              Rating (12)
            </p>
          </div>

          <div style={{ ...style.iconAndText }}>
            <ion-icon
              style={{
                ...style.icon,
                ...style.iconRounded,
                color: "#40c057",
                backgroundColor: "#b2f2bb85",
              }}
              name="checkmark-circle-outline"
            ></ion-icon>
            <p>Verified by BM&DS</p>
          </div>
        </div>

        <p style={{ marginTop: ".8rem", lineHeight: "1.5" }}>
          {selectedPerson[`${category}Info`]}
          {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
          quisquam, molestiae commodi sunt quibusdam error illo hic voluptatum
          vero, quas est. */}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
