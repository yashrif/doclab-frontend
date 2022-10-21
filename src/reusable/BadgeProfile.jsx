import React, { useEffect, useRef, useState } from "react";
import { Box, Image, Text, SlideFade, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Avatar from "../assets/img/avatar.png";

const BadgeProfile = ({ ImageUUID, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const {
    isOpen: isResetOpen,
    onToggle: onResetToggle,
    onClose: onResetClose,
  } = useDisclosure();

  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current?.contains(event.target)) return;

      onResetClose();
      setIsOpen(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isResetOpen) {
        setIsOpen(false);
        onResetToggle();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <Box ref={ref} position={"relative"}>
      <Image
        cursor={"pointer"}
        onClick={() => {
          setIsOpen(!isOpen);
          onResetToggle();
        }}
        src={ImageUUID ? "https://ucarecdn.com/" + ImageUUID + "/" : Avatar}
        alt="Profile"
        w="14"
        h={"14"}
        borderRadius="full"
      />
      {isOpen && (
        <SlideFade
          in={isResetOpen}
          offsetY="-1.5rem"
          transition={{ enter: { duration: 0.01 } }}
        >
          <Box
            position={"absolute"}
            top={"115%"}
            left={"50%"}
            transform={"translate(-50%, 0)"}
            h={"auto"}
            bg={
              "linear-gradient(155deg, #ffffffbf, #ffffffbf,#ffffffbf, #8ec0ebbf, #1c7fd6bf)"
            }
            boxShadow="0 1.2rem 1.2rem rgba(0, 0, 0, 0.08)"
            // bg="rgba(255, 255, 255, .6)"
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            // px={16}
            // py={12}
            padding="1.2rem 1.6rem"
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
                fontSize={"1.5rem"}
                fontWeight="medium"
                color={"font.focused"}
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
      )}
    </Box>
  );
};

export default BadgeProfile;
