import React from "react";
import { faker } from "@faker-js/faker";
import theme from "../styling/theme.jsx";
import { Grid } from "@chakra-ui/react";

const ProfileCard = ({ category, selectedPerson, entity }) => {
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
      fontWeight: "500",
      marginRight: ".4rem",
    },
  };

  return (
    <div
      style={{
        height: "100%",
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        alignItems: "stretch",
        borderRadius: "1.1rem",
        backgroundColor: `${theme.typography.colors.background.personCard}`,
      }}
    >
      <img
        style={{
          maxWidth: "180px",
          maxHeight: "210px",
          display: "block",
          borderTopLeftRadius: "1.1rem",
          borderBottomLeftRadius: "1.1rem",
        }}
        src={
          selectedPerson.doctorImageUUID
            ? "https://ucarecdn.com/" + selectedPerson.doctorImageUUID + "/"
            : faker.image.avatar()
        }
        alt={`${category}`}
      />

      <div
        style={{
          fontSize: "1.4rem",
          padding: "1.6rem 3.2rem",

          display: "flex",
          flexDirection: "column",
          gap: ".8rem",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              gap: "1.6rem",
              alignItems: "center",
              marginBottom: ".8rem",
            }}
          >
            {entity.includes("Name") && (
              <h2
                style={{
                  fontSize: "1.8rem",
                  color: "#333",
                  fontWeight: "500",
                }}
              >
                {theme.methods.capitalize(selectedPerson[`${category}Name`])}
              </h2>
            )}

            {entity.includes("Verification") && (
              <div
                style={{
                  ...style.iconAndText,
                  gap: ".4rem",
                  backgroundColor: "#b9ecc2",
                  padding: ".4rem .6rem",
                  borderRadius: "20rem",
                }}
              >
                <ion-icon
                  style={{
                    ...style.icon,
                    // ...style.iconRounded,
                    color: "#399147",
                    // backgroundColor: "#b2f2bb85",
                  }}
                  name="checkmark-circle-outline"
                ></ion-icon>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#399147",
                    fontWeight: "500",
                  }}
                >
                  Verified
                </p>
              </div>
            )}
          </div>

          {entity.includes("ConsultancyCount") && (
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
                  {selectedPerson[`${category}ConsultancyCount`]
                    ? selectedPerson[`${category}ConsultancyCount`]
                    : 0}
                </span>
                Patients
              </p>
            </div>
          )}
        </div>

        <Grid templateColumns={"auto 1fr"} columnGap={"24"} rowGap={"8"}>
          {entity.includes("Speciality") && (
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
                {theme.methods.capitalize(
                  selectedPerson[`${category}Speciality`]
                )}
              </p>
            </div>
          )}

          {/* <div style={{ display: "flex", gap: "1.6rem" }}> */}
          {entity.includes("Degrees") && (
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
                {selectedPerson[`${category}Degrees`]?.length == 0
                  ? "MBBS"
                  : selectedPerson[`${category}Degrees`]?.map(
                      (e) => e.name + ". "
                    )}
              </p>
            </div>
          )}

          {entity.includes("Experience") && (
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
              <p>
                <span style={{ ...style.span }}>
                  {selectedPerson[`${category}Experience`]}
                </span>
                Years of experience
              </p>
            </div>
          )}
          {/* </div> */}

          {/* <div style={{ display: "flex", gap: "1.6rem" }}> */}
          {entity.includes("Rating") && (
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
          )}
        </Grid>
        {entity.includes("Info") && (
          <p style={{ marginTop: ".8rem", lineHeight: "1.5" }}>
            {selectedPerson[`${category}Info`]
              ? selectedPerson[`${category}Info`]
              : "No information was provided"}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
