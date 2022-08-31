import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { CatmullRomCurve } from "react-svg-curve";

const WidgetHealth = ({ title, description, value, unit, cordY }) => {
  const ratioXY = 3;

  const ref = useRef();
  const [graphWidth, setGraphWidth] = useState(200);

  useEffect(() => {
    if (ref) setGraphWidth(ref.current.clientWidth);
  }, [ref]);

  const maxY = Math.max(...cordY);
  const dif = graphWidth / (cordY.length - 1);
  const data = cordY.map((value, index) => [
    index * dif,
    (value * (graphWidth / ratioXY)) / (maxY + 1),
  ]);

  return (
    <Grid
      templateColumns={"auto 1fr"}
      gap="24"
      px="32"
      py="16"
      bg="bg"
      alignItems={"center"}
      borderRadius={"2xl"}
      boxShadow={"0 0 24px rgba(28, 126, 214, .1)"}
    >
      <GridItem>
        <Text
          color="font.focused"
          fontSize={"xl"}
          fontWeight="medium"
          mb={"4"}
          letterSpacing=".5px"
        >
          {title}
        </Text>
        <Text color={"font.muted"} fontSize={"md"} mb="12">
          {description}
        </Text>
        <Flex alignItems={"baseline"} gap="8">
          <Text color={"font.focused"} fontSize="3xl" fontWeight={"semibold"}>
            {value}
          </Text>
          <Text color={"font.muted"} fontSize="md">
            {unit}
          </Text>
        </Flex>
      </GridItem>
      <GridItem transform={"rotateX(180deg)"}>
        <svg ref={ref} width="100%" height={`${graphWidth / ratioXY}px`}>
          <CatmullRomCurve
            alpha={0}
            data={data}
            showPoints={false}
            strokeWidth={3}
            stroke="#7048e8"
          />
        </svg>
      </GridItem>
    </Grid>
  );
};

export default WidgetHealth;
