import React from "react";
import { Text } from "@chakra-ui/react";
import HeadingPrimary from "./reusable/HeadingPrimary.jsx";
import HeadingSecondary from "./reusable/HeadingSecondary.jsx";

const About = () => {
  return (
    <section
      className="about"
      style={{
        // paddingTop: "9.6rem",
        marginBottom: "9.6rem",
      }}
    >
      <div id="about">
        <HeadingPrimary>About us</HeadingPrimary>
        <HeadingSecondary mb="1.6rem">
          We provide the best services
        </HeadingSecondary>

        <div className="row">
          <div className="image">
            <img src="img/about-img.svg" alt="" />
          </div>

          <div className="content">
            <Text
              textTransform={"capitalize"}
              color={"font.hero !important"}
              fontSize="4xl !important"
              fontWeight={"semibold"}
              lineHeight="short"
              mb="32"
            >
              we take care of your healthy life
            </Text>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
              ducimus, quod ex cupiditate ullam in assumenda maiores et culpa
              odit tempora ipsam qui, quisquam quis facere iste fuga, minus
              nesciunt.
            </p>
            <p style={{ marginBottom: "2.4rem" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              vero ipsam laborum porro voluptates voluptatibus a nihil
              temporibus deserunt vel?
            </p>
            <a href="a" className="btn">
              Learn more <span className="fas fa-chevron-right"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
