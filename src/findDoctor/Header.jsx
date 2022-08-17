import React from "react";
import logo from "../assets/logo.png";
import theme from "../styling/theme.jsx";
import LoginPopUp from "../reusable/login/LoginPopUp.jsx";
import { Button } from "@chakra-ui/react";
const style = {
  headerNavList: {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    columnGap: "3.2rem",
  },
};

const Header = () => {
  return (
    <>
      <style>
        {`
        .header-link:link,
        .header-link:visited {
          display: inline-block;
          text-decoration: none;
          color: #333;
          font-weight: 600;
          padding: 0.6rem 0 0.5rem 0;
          border-bottom: 0.1rem solid transparent;

          transition: all 0.3s;
        }

        .header-link:active,
        .header-link:hover {
          color: ${theme.typography.colors.primaryFirst.primary};
          border-bottom: 0.1rem solid currentColor;
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
          fontSize: "1.6rem",
          padding: `0 ${theme.typography.sectionGap.large}`,
          marginBottom: `${theme.typography.sectionGap.headerBottom}`,

          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          // justifyContent: "space-between",
          alignItems: "center",
          /* background-color: "var(--find-doctor-bg-color-tint-1)", */
          /* box-shadow: "0 0 0 .1rem rgba(0, 0, 0, 0.1)", */
        }}
      >
        <a style={{ textDecoration: "none" }} href="/">
          <img
            style={{
              /* height:3".6rem", */
              /* width: "2.4rem", */
              height: "5.2rem",
            }}
            src={logo}
            alt="logo"
          />
        </a>
        <nav style={{ justifySelf: "center" }}>
          <ul
            className="header-global-nav-list header-nav-list"
            style={style.headerNavList}
          >
            <li className="header-global-nav-link ">
              <a className="header-link" href="/">
                Home
              </a>
            </li>
            <li className="header-global-nav-link ">
              <a className="header-link" href="/">
                Find Doctor
              </a>
            </li>
            <li className="header-global-nav-link ">
              <a className="header-link" href="/">
                Doctor
              </a>
            </li>
            <li className="header-global-nav-link ">
              <a className="header-link" href="/">
                Patient
              </a>
            </li>
          </ul>
        </nav>
        <nav style={{ justifySelf: "end" }}>
          <ul
            className="header-page-nav-list header-nav-list"
            style={style.headerNavList}
          >
            <li className="header-page-nav-link ">
              <a className="header-link" href="/">
                How it works
              </a>
            </li>
            <li className="header-page-nav-link ">
              <a className="header-link" href="/">
                Services
              </a>
            </li>
            <LoginPopUp>
              <li className="header-page-nav-link ">
                <Button colorScheme="messenger" size="lg" variant="outline">
                  Log In
                </Button>
              </li>
            </LoginPopUp>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
