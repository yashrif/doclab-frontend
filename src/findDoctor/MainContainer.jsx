import React from "react";
import { Grid } from "@chakra-ui/react";

import theme from "../styling/theme.jsx";

const MainContainer = ({ children }) => {
  return (
    <Grid
      as="section"
      height={`calc(100% - ${theme.typography.containerHeight.header} - ${theme.typography.sectionGap.medium} - ${theme.typography.sectionGap.headerBottom} + 2.4rem)`}
      padding={`1.6rem ${theme.typography.sectionGap.large} ${theme.typography.sectionGap.medium}`}
      gridTemplateColumns={`minmax(${theme.typography.containerWidth.overviewMin}, 4fr) 13fr`}
      alignItems="start"
      columnGap={`${theme.typography.sectionGap.medium}`}
      backgroundColor={`${theme.colors.bgContainer}`}
      overflowY="hidden"
    >
      {children.map((child) => child)}
    </Grid>
  );
};

export default MainContainer;
