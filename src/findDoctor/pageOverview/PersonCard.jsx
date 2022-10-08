import React from "react";
import { faker } from "@faker-js/faker";
import theme from "../../styling/theme.jsx";

const PersonCard = ({ category, id, person, setSelectedPerson }) => {
  const style = {
    icon: {
      fontSize: "1.2rem",
      "--ionicon-stroke-width": "4.8rem",
      transition: "all .3s",
    },

    iconAndText: {
      fontSize: "1.2rem",
      display: "flex",
      gap: "0.4rem",
      alignItems: "center",
    },
  };

  return (
    <>
      <style>
        {`
          .person-card:last-child { margin: 0 !important;}

          .person-card:hover {
            transform: scale(1.03);
          }

          .person-card:hover h3,
          .person-card:hover p{
            color: #fff !important;
          }

          .person-card:hover .icon-star ion-icon{
            color: #fdd65e !important;
          }

          .person-card:hover .icon-location ion-icon{
            color: #bbd8f3 !important;
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

            background-image: linear-gradient(145deg,
                #e8f2fb,
                #77b2e6,
                #1c7ed6
              );



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
        className="person-card"
        role={"button"}
        tabIndex={id}
        onClick={() => setSelectedPerson(person)}
        onKeyDown={() => {}}
        style={{
          marginBottom: " 1.2rem",
          transition: "all .3s",
        }}
      >
        <div
          className="person-card-container"
          style={{
            position: "relative",
            cursor: "pointer",
            padding: "1.2rem 2rem",
            overflow: "hidden",

            // display: "flex",
            // justifyContent: "space-between",
            // gap: ".4rem",
            boxShadow: "0 0 .8rem rgba(173, 181, 189, .35)",
            borderRadius: " 0.9rem",

            background:
              "linear-gradient(135deg, #ffff, #fff, #e6f9f0, #cdf3e1, #82e2b5)",

            zIndex: "1",
            transition: "all 0.3s",
          }}
        >
          {/* <div> */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              columnGap: "1.6rem",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: "4.8rem",
                height: "4.8rem",
                borderRadius: "50%",
                gridRow: "1/ -3",
                // alignSelf: "flex-start",
              }}
              src={
                person[`${category}ImageUUID`]
                  ? "https://ucarecdn.com/" +
                    person[`${category}ImageUUID`] +
                    "/"
                  : faker.image.avatar()
              }
              alt="avatar"
            />

            <div
              style={{
                // display: "flex",
                // flexDirection: "column",
                // gap: ".2rem",
                color: "#767676",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  columnGap: "1.6rem",
                  // justifyContent: "space-between",
                }}
              >
                <h3
                  className="title"
                  style={{
                    fontSize: "1.4rem",
                    color: "#333",
                    fontWeight: "500",
                    marginBottom: ".2rem",
                  }}
                >
                  {theme.methods.capitalize(person[`${category}Name`])}
                </h3>
                <div
                  className="icon-star"
                  style={{
                    ...style.iconAndText,
                    alignItems: "baseline",
                    // backgroundColor: "#e8f2fbbf",
                  }}
                >
                  <ion-icon
                    style={{
                      ...style.icon,
                      color: "#fcc419",
                    }}
                    name="star-outline"
                  ></ion-icon>
                  <p
                    style={{
                      color: "#333",
                      fontSize: "1.05rem",
                      fontWeight: "500",
                    }}
                  >
                    {person[`${category}Rating`]}
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "1.6rem",
                  fontSize: "1.2rem",
                  // fontWeight: "500",
                }}
              >
                <p
                  style={{
                    fontSize: "1.2rem",
                    // fontWeight: "500",
                    marginBottom: ".4rem",
                  }}
                >
                  {theme.methods.capitalize(person[`${category}Speciality`])}
                </p>

                <div className="icon-location" style={{ ...style.iconAndText }}>
                  <ion-icon
                    style={{
                      ...style.icon,
                      color: `${theme.typography.colors.primaryFirst.primary}`,
                    }}
                    name="location-outline"
                  ></ion-icon>
                  <p>{person[`${category}SubDistrict`]}</p>
                </div>
              </div>
            </div>
          </div>
          {/* <p
            style={{
              alignSelf: "flex-start",
              fontSize: "1rem",
              color: "#fff",
              fontWeight: "500",

              padding: "0.2rem 3.6rem",
              borderRadius: "2rem",
              backgroundColor: "rgba(61, 194, 86, 1)",

              position: "absolute",
              top: "8px",
              right: "-35px",
              transform: "rotate(35deg)",

              zIndex: "9999",
            }}
          >
            Available
          </p> */}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default PersonCard;
