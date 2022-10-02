import React, { useState } from "react";
import ProfileCard from "../../reusable/ProfileCard.jsx";
import TimeSlot from "./TimeSlots.jsx";
import Navigation from "./Navigation.jsx";
import Reviews from "./Reviews.jsx";
import Info from "./Info.jsx";
import Consult from "./Consult.jsx";
import theme from "../../styling/theme.jsx";

const PageDetails = ({ category, selectedPerson }) => {
  // const style = {
  //   icon: {
  //     fontSize: "1.4rem",
  //     "--ionicon-stroke-width": "4.8rem",
  //   },

  //   iconRounded: {
  //     padding: ".4rem",
  //     borderRadius: "50%",
  //   },

  //   iconAndText: {
  //     display: "flex",
  //     alignItems: "center",
  //     gap: ".8rem",
  //   },
  //   span: {
  //     fontColor: "#333",
  //     fontWeight: "600",
  //     marginRight: ".4rem",
  //   },
  // };

  const [selectedNav, setselectedNav] = useState(0);

  return (
    <div
      className="section"
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* <div
        style={{
          ...style.iconAndText,
          marginBottom: "1.6rem",
          marginLeft: "auto",
        }}
      >
        <h1
          style={{
            fontSize: "1.8rem",
            fontWeight: "600",
            color: `${theme.typography.colors.primaryFirst.primary}`,
            textShadow: "0 0.2rem 0.2rem rgba(0,0,0,0.15)",
          }}
        >{`${theme.methods.capitalize(category)}'s Details`}</h1>
        <ion-icon
          style={{
            ...style.icon,
            fontSize: "1.8rem",
            color: `${theme.typography.colors.primaryFirst.tints[0]}`,
          }}
          name="arrow-down"
        ></ion-icon>
      </div> */}

      <div
        style={{
          width: "100%",
          height: "100%",
          display: "grid",
          gridTemplateColumns: "11fr 4fr",
          gridTemplateRows: "auto 1fr",
          alignItems: "stretch",
          columnGap: `${theme.typography.sectionGap.medium}`,
          rowGap: `${theme.typography.sectionGap.mediumLow}`,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            // alignSelf: "stretch",
            borderRadius: "1.1rem",
            backgroundColor: `${theme.typography.colors.background.personCard}`,
            boxShadow: "0 0 2.4rem rgba(0, 0, 0, .05)",
          }}
        >
          <ProfileCard
            category={category}
            selectedPerson={selectedPerson}
            entity={[
              "Name",
              "Speciality",
              "Degrees",
              "Rating",
              "Info",
              "ConsultencyCount",
              "Experience",
              "Verification",
            ]}
          />
        </div>

        <div
          style={{
            // alignSelf: "stretch",
            boxShadow: "0 0 2.4rem rgba(0, 0, 0, .05)",
            overflow: "hidden",
          }}
        >
          <TimeSlot category={category} selectedPerson={selectedPerson} />
        </div>

        <div
          style={{
            gridColumn: "1 / -1",
            alignSelf: "stretch",
            backgroundColor: `${theme.typography.colors.background.personCard}`,
            borderRadius: "1.1rem",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 0 2.4rem rgba(0, 0, 0, .05)",
          }}
        >
          <Navigation
            selectedNav={selectedNav}
            setselectedNav={setselectedNav}
          />
          {selectedNav === 0 && (
            <Info selectedPerson={selectedPerson} category={category} />
          )}
          {selectedNav === 1 && <Reviews />}
          {selectedNav === 2 && (
            <Consult selectedPerson={selectedPerson} category={category} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PageDetails;
