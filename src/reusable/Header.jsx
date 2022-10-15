import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  SlideFade,
  useDisclosure,
} from "@chakra-ui/react";
import logo from "../assets/img/logo.png";
import theme from "../styling/theme.jsx";
import AuthPopUp from "./authPopUp/AuthPopUp.jsx";
import ButtonFull from "./button/ButtonFull.jsx";
import BadgeProfile from "./BadgeProfile.jsx";
import apiGet from "../hooks/apiGet.jsx";
import { SERVER } from "../assets/variable/values";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("doctorToken") != null ||
      localStorage.getItem("patientToken") != null
  );

  const [person, , fetchPerson] = apiGet();
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const {
    isOpen: isResetOpen,
    onToggle: onResetToggle,
    onClose: onResetClose,
  } = useDisclosure();

  const ref = useRef();

  useEffect(() => {
    if (
      localStorage.getItem("doctorToken") ||
      localStorage.getItem("patientToken")
    )
      fetchPerson(`${SERVER}/auth`, {
        headers: {
          TOKEN: localStorage.getItem(
            `${
              localStorage.getItem("doctorToken")
                ? "doctorToken"
                : "patientToken"
            }`
          ),
        },
      });
  }, [isLoggedIn]);

  useEffect(() => {
    setSelectedPerson(
      person[
        `${localStorage.getItem("doctorToken") ? "authDoctor" : "authPatient"}`
      ]
    );
  }, [person]);

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) return;

      onResetClose();
      setIsOptionOpen(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const {
    isOpen: isDashOpen,
    onOpen: onDashOpen,
    onClose: onDashClose,
  } = useDisclosure();

  const style = {
    headerNavList: {
      listStyle: "none",
      display: "flex",
      alignItems: "center",
      columnGap: "3.2rem",
    },
  };

  return (
    <>
      <style>
        {`
        .header *:focus{
          border: none;
          box-shadow: none;
        }

        .header-link,
        .header-link:link,
        .header-link:visited {
          display: inline-block;
          letter-spacing: .25px;
          text-decoration: none;
          color: #333;
          font-weight: 500;
          padding: 0.6rem 0 0.5rem 0;
          border-bottom: 0.1rem solid transparent;

          transition: all 0.3s;
        }

        .header-link:active,
        .header-link:hover {
          color: ${theme.typography.colors.primaryFirst.primary};
          border-bottom: 0.1rem solid currentColor;
          text-shadow:  0 0.4rem 0.8rem rgba(28, 126, 214, 0.25);
          box-shadow: 0 0.6rem 0.4rem -0.4rem rgba(28, 126, 214, 0.5);
        }

        .header-link.nav-cta:link,
        .header-link.nav-cta:visited {
          color: ${theme.typography.colors.primaryFirst.primary};
          /* background-color: #fff; */
          padding: 1.2rem 2.4rem;
          border: none;
          border-radius: 0.9rem;
          box-shadow: inset 0 0 0 0.3rem ${theme.typography.colors.primaryFirst.primary};

          transition: all 0.3s;
        }

        .header-link.nav-cta:active,
        .header-link.nav-cta:hover {
          color: #fff;
          background-color: ${theme.typography.colors.primaryFirst.primary};
          box-shadow: inset 0 0 0 0.3rem rgba(28, 126, 214, 0.25),
            0 0.8rem 1.6rem rgba(28, 126, 214, 0.5);
        }

        .header-link-extra:link,
        .header-link-extra:visited{
          font-size: 1.5rem;
          color: inherit;
        }

        .header-link-extra:active,
        .header-link-extra:hover{
            color:  ${theme.typography.colors.primaryFirst.primary};
        }
      `}
      </style>
      <header
        className="header"
        style={{
          height: `${theme.typography.containerHeight.header}`,
          fontSize: "1.7rem",
          padding: `0 ${theme.typography.sectionGap.large}`,
          marginBottom: `${theme.typography.sectionGap.headerBottom}`,

          display: "grid",
          // gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateColumns: "repeat(3, auto)",
          justifyContent: "space-between",
          alignItems: "center",
          /* background-color: "var(--find-doctor-bg-color-tint-1)", */
          /* box-shadow: "0 0 0 .1rem rgba(0, 0, 0, 0.1)", */
        }}
      >
        <Modal
          closeOnOverlayClick
          isOpen={isDashOpen}
          onClose={onDashClose}
          size="2xl"
        >
          <ModalOverlay
            bg="blackAlpha.300"
            backdropFilter="auto"
            backdropBlur="2px"
          />
          <ModalContent my="auto" py="32" px="12" borderRadius="11px">
            <ModalCloseButton m={"4"} />
            <ModalBody
              fontSize={"xl"}
              py="16"
              textAlign={"center"}
              fontWeight={"medium"}
              color={"gray.500"}
              mb={"8"}
            >
              You need to be logged in to access dashboard
            </ModalBody>

            <ModalFooter mx={"auto"} display={"flex"} gap={"24"}>
              <AuthPopUp
                setIsLoggedIn={setIsLoggedIn}
                initialWindow={"logInWindow"}
              >
                <ButtonFull
                  py="16"
                  px="20"
                  fontSize={"14"}
                  borderRadius={"lg"}
                  fontWeight={"medium"}
                  fontColor={"#fff"}
                  onClick={() => {
                    localStorage.clear();
                    setIsLoggedIn(false);
                  }}
                >
                  Login
                </ButtonFull>
              </AuthPopUp>

              <AuthPopUp
                setIsLoggedIn={setIsLoggedIn}
                initialWindow={"signUpWindow"}
              >
                <ButtonFull
                  py="16"
                  px="20"
                  fontSize={"14"}
                  borderRadius={"lg"}
                  fontWeight={"medium"}
                  fontColor={"#fff"}
                  onClick={() => {
                    localStorage.clear();
                    setIsLoggedIn(false);
                  }}
                >
                  Sign Up
                </ButtonFull>
              </AuthPopUp>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Link
          style={{ textDecoration: "none", height: "5.2rem", width: "13.8rem" }}
          to="/"
        >
          <img
            style={{
              /* height:3".6rem", */
              /* width: "2.4rem", */
              // width: "6.4rem",
              width: "100%",
            }}
            src={logo}
            alt="logo"
          />
        </Link>
        <nav style={{ justifySelf: "center" }}>
          <ul
            className="header-global-nav-list header-nav-list"
            style={style.headerNavList}
          >
            <li className="header-global-nav-link ">
              <Link className="header-link" to="/home">
                Home
              </Link>
            </li>
            <li className="header-global-nav-link ">
              <Link className="header-link" to="/findDoctor">
                Find Doctor
              </Link>
            </li>

            <li className="header-global-nav-link ">
              <Link
                className="header-link"
                onClick={() => {
                  localStorage.getItem("doctorToken") == null &&
                    localStorage.getItem("patientToken") == null &&
                    onDashOpen();
                }}
                to={
                  localStorage.getItem("doctorToken") != null
                    ? "/doctorDashboard"
                    : localStorage.getItem("patientToken") != null
                    ? "/patientDashboard"
                    : ""
                }
              >
                Dashboard
              </Link>
            </li>

            {/* <li className="header-global-nav-link ">
              <Link className="header-link" to="/patientDashboard">
                Patient
              </Link>

            </li> */}
          </ul>
        </nav>
        <nav style={{ justifySelf: "end" }}>
          <ul
            className="header-page-nav-list header-nav-list"
            style={style.headerNavList}
          >
            {(window.location.pathname == "/home" ||
              window.location.pathname == "/") && (
              <>
                <li className="header-page-nav-link">
                  <HashLink className="header-link" to="/#about">
                    About
                  </HashLink>
                </li>
                <li className="header-page-nav-link">
                  <HashLink className="header-link" to="/#howItWorks">
                    How it works
                  </HashLink>
                </li>
                <div
                  ref={ref}
                  tabIndex={0}
                  role={"button"}
                  onClick={() => {
                    setIsOptionOpen(!isOptionOpen);
                    onResetToggle();
                  }}
                  onKeyDown={() => {}}
                  style={{
                    cursor: "pointer",
                    position: "relative",
                  }}
                >
                  <li
                    className="header-link"
                    style={{
                      color: `${
                        isOptionOpen
                          ? theme.typography.colors.primaryFirst.primary
                          : ""
                      }`,
                      display: "flex",
                      alignItems: "center",
                      gap: ".4rem",
                    }}
                  >
                    <p>More</p>
                    <ion-icon
                      style={{ fontSize: "1.8rem" }}
                      name="chevron-down-outline"
                    ></ion-icon>
                  </li>

                  {isOptionOpen && (
                    <SlideFade
                      in={isResetOpen}
                      offsetY="-10px"
                      transition={{
                        enter: { duration: 0.05 },
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "105%",
                          left: "50%",
                          transform: "translate(-50%, 0)",
                          padding: "1.6rem",
                          borderRadius: ".9rem",
                          // backgroundColor: "red",
                          // backgroundColor: "rgba(255, 255, 255, 0.6)",
                          background:
                            "linear-gradient(155deg, #ffffffbf, #ffffffbf, #ffffffbf, #d0bfffc2, #d0bfffc2)",
                          zIndex: 5,

                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "1.6rem",
                        }}
                      >
                        <li className="header-page-nav-link">
                          <HashLink
                            className="header-link-extra"
                            to="/#services"
                          >
                            Services
                          </HashLink>
                        </li>
                        <li className="header-page-nav-link">
                          <HashLink
                            className="header-link-extra"
                            to="/#testimonials"
                          >
                            Testimonials
                          </HashLink>
                        </li>
                        <li className="header-page-nav-link">
                          <HashLink className="header-link-extra" to="/#blog">
                            Blogs
                          </HashLink>
                        </li>
                      </div>
                    </SlideFade>
                  )}
                </div>
              </>
            )}
            {isLoggedIn ? (
              <BadgeProfile
                ImageUUID={
                  localStorage.getItem("doctorToken")
                    ? selectedPerson?.doctorImageUUID
                    : selectedPerson?.patientImageUUID
                }
                setIsLoggedIn={setIsLoggedIn}
              />
            ) : (
              <AuthPopUp setIsLoggedIn={setIsLoggedIn}>
                <li className="header-page-nav-link">
                  <ButtonFull
                    py="18"
                    px="24"
                    fontSize={"17"}
                    fontWeight={"medium"}
                  >
                    Login
                  </ButtonFull>
                </li>
              </AuthPopUp>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
