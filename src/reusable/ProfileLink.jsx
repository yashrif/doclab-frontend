import React from "react";
import { Center } from "@chakra-ui/react";
import BadgeProfile from "./BadgeProfile.jsx";
import theme from "../styling/theme.jsx";

const ProfileLink = ({ imageuuid }) => {
  return (
    <Center gap={"16"}>
      <style>
        {`
          #bell:hover {
            color: ${theme.typography.colors.primaryFirst.primary} !important;
            animation: shake .5s ease-in;
          }

          @keyframes shake {
            0% {
              transform: rotate(0deg) scale(1.1);
            }

            20% {
              transform: rotate(20deg) scale(1.1);
            }

            40% {
              transform: rotate(-25deg) scale(1.1);
            }

            60% {
              transform: rotate(20deg) scale(1.1);
            }

            80% {
              transform: rotate(-20deg) scale(1.1);
            }

            100% {
              transform: rotate(0deg) scale(1);
            }
          }
        `}
      </style>
      <ion-icon
        id="bell"
        style={{
          color: "#18181B",
          fontSize: "2.4rem",
          marginRight: ".8rem",
          cursor: "pointer",
          transition: "all 0.3s",
        }}
        name="notifications-outline"
      ></ion-icon>

      <BadgeProfile imageuuid={imageuuid} />
    </Center>
  );
};

export default ProfileLink;
