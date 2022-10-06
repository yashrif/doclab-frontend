import React, { useState } from "react";
import theme from "../../styling/theme.jsx";

const Navigation = ({ selectedNav, setSelectedNav }) => {
  const [activeNav, setActiveNav] = useState(null);

  const style = {
    nav: {
      cursor: "pointer",
      display: "inline-block",
      textDecoration: "none",
      fontSize: "1.6rem",
      color: "#333",
      fontWeight: "600",
      padding: "0.6rem 0 0.5rem 0",
      borderBottom: "0.1rem solid transparent",

      transition: "all 0.3s",
    },

    navActive: {
      color: `${theme.typography.colors.primaryFirst.primary}`,
      borderBottom: "0.1rem solid currentColor",
      boxShadow: "0 0.6rem 0.4rem -0.4rem rgba(28, 126, 214, 0.5)",
    },
  };

  const renderedNavList = ["Info", "Reviews", "Consult Q&A", "Health feed"].map(
    (value, index) => {
      return (
        <div
          key={index}
          role={"button"}
          tabIndex={index}
          className="nav-link"
          style={
            activeNav === index
              ? activeNav === selectedNav
                ? {
                    ...style.navActive,
                    ...style.nav,
                    color: `${theme.typography.colors.primaryFirst.primary}`,
                  }
                : { ...style.navActive, ...style.nav }
              : selectedNav === index
              ? {
                  ...style.nav,
                  color: `${theme.typography.colors.primaryFirst.primary} `,
                }
              : style.nav
          }
          onMouseEnter={() => setActiveNav(index)}
          onMouseLeave={() => setActiveNav(null)}
          onClick={() => setSelectedNav(index)}
          onKeyDown={() => {}}
        >
          {value}
        </div>
      );
    }
  );

  return (
    <>
      <style>
        {`
          .nav-link:focus {
            outline: none;
            box-shadow: none;
          }
        `}
      </style>
      <div
        onMouseLeave={() => setActiveNav(selectedNav)}
        style={{
          padding: "1.2rem 0",
          display: "flex",
          justifyContent: "center",
          gap: "6.4rem",
          borderBottom: "1px solid #e6e6e6",
        }}
      >
        {renderedNavList}
      </div>
    </>
  );
};

export default Navigation;
