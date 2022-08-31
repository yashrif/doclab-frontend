import React from "react";
import theme from "../styling/theme.jsx";

const MainContainer = ({ children }) => {
  return (
    <section
      style={{
        height: `calc(
            100% - ${theme.typography.containerHeight.header} - ${theme.typography.sectionGap.medium} - ${theme.typography.sectionGap.headerBottom} - 4.8rem
          )`,
        margin: `2.4rem ${theme.typography.sectionGap.large} ${theme.typography.sectionGap.medium}`,
        display: "grid",
        gridTemplateColumns: `minmax(${theme.typography.containerWidth.overviewMin}, 4fr) 13fr`,
        alignItems: "start",
        columnGap: `${theme.typography.sectionGap.medium}`,
        // overflow: "hidden",
      }}
    >
      {children.map((child) => child)}
    </section>
  );
};

export default MainContainer;
