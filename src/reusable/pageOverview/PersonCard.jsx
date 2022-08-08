import React from "react";
import { faker } from "@faker-js/faker";
import theme from "../../styling/theme.jsx";

const style = {
  icon: {
    fontSize: "1.2rem",
    "--ionicon-stroke-width": "4.4rem",
  },

  iconAndText: {
    fontSize: "1.2rem",
    display: "flex",
    gap: "0.4rem",
    alignItems: "center",
  },
};

const PersonCard = ({ category, id, person, setSelectedPerson }) => {
  return (
    <>
      <style>
        {`
          .person-card:last-child { margin: 0 !important;}
          .person-card:hover {
            transform: scale(1.03);
          }
          .person-card-container::before {
            position: absolute;
            content: "";
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            border-radius: 0.9rem;
            background-image: linear-gradient(145deg,
                rgba(231, 245, 255, 0.15),
                rgba(231, 245, 255, 0.15),
                rgba(77, 171, 247, 0.35),
                rgba(77, 171, 247, 0.6),
                rgba(77, 171, 247, 0.35),
                rgba(77, 171, 247, 0.6),
                rgba(28, 127, 214, 0.75));
            z-index: -1;
            opacity: 0;
            transition: opacity 0.3s linear;
          }
          .person-card-container:hover::before {
            opacity: 1;
          }
        `}
      </style>
      <div
        role={"button"}
        tabIndex={id}
        onClick={() => setSelectedPerson(person)}
        onKeyDown={() => {}}
        className="person-card"
        style={{
          marginBottom: " 1.2rem",
          transition: "all .3s",
        }}
         
      >
        <div
          className="person-card-container"
          style={{
            cursor: "pointer",
            position: "relative",
            padding: "1.2rem 2rem",

            display: "flex",
            justifyContent: "space-between",
            gap: "1.6rem",
            boxShadow: "0 0.1rem 0.4rem rgba(173, 181, 189, 0.4)",
            borderRadius: " 0.9rem",

            backgroundImage: `linear-gradient(
              155deg,
              ${theme.typography.colors.background.personCard},
              ${theme.typography.colors.background.personCard},
              ${theme.typography.colors.background.personCard},
              ${theme.typography.colors.background.personCard},
              rgba(18, 184, 134, 0.15),
              rgba(18, 184, 134, 0.3)
            )`,

            zIndex: "1",
            transition: "all 0.3s",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                gap: "1.6rem",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  height: "5.2rem",
                  borderRadius: "50%",
                  gridRow: "1/ -3",
                }}
                src={faker.image.avatar()}
                alt="avatar"
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: ".8rem",
                  color: "#767676",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.4rem",
                    color: "#333",
                    fontWeight: "600",
                  }}
                >
                  {theme.methods.capitalize(person[`${category}Name`])}
                </h3>

                <p
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "500",
                  }}
                >
                  {theme.methods.capitalize(person[`${category}Speciality`])}
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "1.6rem",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ ...style.iconAndText }}>
                    <ion-icon
                      style={{
                        ...style.icon,
                        color: `${theme.typography.colors.primaryFirst.primary}`,
                      }}
                      name="location-outline"
                    ></ion-icon>
                    <p>{person[`${category}SubDistrict`]}</p>
                  </div>

                  <div style={{ ...style.iconAndText }}>
                    <ion-icon
                      style={{
                        ...style.icon,
                        color: "#fcc419",
                      }}
                      name="star-outline"
                    ></ion-icon>
                    <p style={{ color: "#333" }}>
                      {person[`${category}Rating`]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p
            style={{
              alignSelf: "flex-end",
              fontSize: "1rem",
              color: "#333",
              fontWeight: "600",

              padding: "0.4rem 0.8rem",
              borderRadius: "2.0rem",
              backgroundColor: "rgba(61, 194, 86, 0.75)",
            }}
          >
            Avaiable
          </p>
        </div>
      </div>
    </>
  );
};

export default PersonCard;
