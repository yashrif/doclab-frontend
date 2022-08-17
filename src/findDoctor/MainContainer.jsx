import React from "react";
import theme from "../styling/theme.jsx";

const MainContainer = ({ children }) => {
  return (
    <section
      style={{
        height: `calc(
            100% - ${theme.typography.containerHeight.header} - ${theme.typography.sectionGap.medium} - ${theme.typography.sectionGap.headerBottom}
          )`,
        margin: `0 ${theme.typography.sectionGap.large} ${theme.typography.sectionGap.medium}`,
        display: "grid",
        gridTemplateColumns: `minmax(${theme.typography.containerWidth.overviewMin}, 5fr) 13fr`,
        alignItems: "start",
        columnGap: `${theme.typography.sectionGap.mediumHigh}`,
        // overflow: "hidden",
      }}
    >
      {children.map((child) => child)}
    </section>
  );
};

export default MainContainer;
