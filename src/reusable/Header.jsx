import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { HashLink } from 'react-router-hash-link';
import { useState } from "react";
=======
import { HashLink } from "react-router-hash-link";
>>>>>>> 0d53adc5dc411d5f6f3ebb09d999478e77ce9eb5
import logo from "../assets/img/logo.png";
import theme from "../styling/theme.jsx";
import AuthPopUp from "./authPopUp/AuthPopUp.jsx";
import ButtonFull from "./button/ButtonFull.jsx";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("doctorToken") != null
    || localStorage.getItem("patientToken") != null);
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
      `}
      </style>
      <header
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
<<<<<<< HEAD
              <Link className="header-link" 
              to={ localStorage.getItem("doctorToken")!=null ?
                   "/doctorDashboard" :
                   localStorage.getItem("patientToken")!=null ? "/patientDashboard" : ""}>
=======
              <Link className="header-link" to="/doctorDashboard">
>>>>>>> 0d53adc5dc411d5f6f3ebb09d999478e77ce9eb5
                Dashboard
              </Link>
            </li>

            {/* <li className="header-global-nav-link ">
              <Link className="header-link" to="/patientDashboard">
                Patient
              </Link>
<<<<<<< HEAD

=======
>>>>>>> 0d53adc5dc411d5f6f3ebb09d999478e77ce9eb5
            </li> */}
          </ul>
        </nav>
        <nav style={{ justifySelf: "end" }}>
          <ul
            className="header-page-nav-list header-nav-list"
            style={style.headerNavList}
          >
<<<<<<< HEAD
            <li className="header-page-nav-link ">
              <HashLink className="header-link" to="/#howItWorks">
                How it works
              </HashLink>
            </li>
            <li className="header-page-nav-link ">
              <HashLink className="header-link" to="/#services">
                Services
              </HashLink>
            </li>
            {(isLoggedIn) ?
              <ButtonFull
                py="18"
                px="24"
                fontSize={"17"}
                fontWeight={"medium"}
                fontColor={"#fff"}
                onClick={() => {
                  localStorage.clear();
                  setIsLoggedIn(false);
                }}
              >
                Logout
              </ButtonFull>
              :
              <AuthPopUp setIsLoggedIn={setIsLoggedIn}>
                <li className="header-page-nav-link ">
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
            }

=======
            {(window.location.pathname == "/home" ||
              window.location.pathname == "/") && (
              <>
                <li className="header-page-nav-link ">
                  <HashLink className="header-link" to="/#howItWorks">
                    Steps
                  </HashLink>
                </li>
                <li className="header-page-nav-link ">
                  <HashLink className="header-link" to="/#services">
                    Services
                  </HashLink>
                </li>
                <li className="header-page-nav-link ">
                  <HashLink className="header-link" to="/#testimonials">
                    Testimonials
                  </HashLink>
                </li>
              </>
            )}
            <AuthPopUp>
              <li className="header-page-nav-link ">
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
>>>>>>> 0d53adc5dc411d5f6f3ebb09d999478e77ce9eb5
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
