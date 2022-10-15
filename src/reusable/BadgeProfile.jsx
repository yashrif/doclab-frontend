import React from "react";
import { faker } from "@faker-js/faker";
import { Box, Image, Text, SlideFade, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const BadgeProfile = ({ ImageUUID, setIsLoggedIn }) => {
  const navigate = useNavigate();

  // const [isOpen, setIsOpen] = useState(false);
  const { isOpen: isResetOpen, onToggle } = useDisclosure();

  return (
    <Box position={"relative"}>
      <Image
        cursor={"pointer"}
        onClick={() => onToggle()}
        src={
          ImageUUID
            ? "https://ucarecdn.com/" + ImageUUID + "/"
            : faker.image.avatar()
        }
        alt="Profile"
        w="14"
        h={"14"}
        borderRadius="full"
      />
      <SlideFade
        in={isResetOpen}
        offsetY="-15px"
        transition={{ enter: { duration: 0.01 } }}
      >
        <Box
          position={"absolute"}
          top={"110%"}
          left={"50%"}
          transform={"translate(-50%, 0)"}
          h={"auto"}
          bg={
            "linear-gradient(155deg, #ffffffbf, #ffffffbf, #ffffffbf, #d0bfffc2, #d0bfffc2)"
          }
          // bg="rgba(255, 255, 255, .6)"
          backdropFilter={"blur(50%)"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          // px={16}
          // py={12}
          padding="1.6rem"
          borderRadius={"xl"}
          zIndex={5}
        >
          <Box
            cursor={"pointer"}
            onClick={() => {
              if (
                window.location.pathname == "/doctorDashboard" ||
                window.location.pathname == "/patientDashboard"
              )
                navigate("/home");
              localStorage.clear();
              setIsLoggedIn && setIsLoggedIn(false);
            }}
          >
            <Text
              fontSize={"14"}
              fontWeight="medium"
              color={"font.hero"}
              transition="all .3s"
              _hover={{
                color: "font.primary",
              }}
            >
              Logout
            </Text>
          </Box>
        </Box>
      </SlideFade>
    </Box>
  );
};

export default BadgeProfile;
