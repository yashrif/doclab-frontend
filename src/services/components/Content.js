import React from "react";
import Home from "../components/Home";
import Icons from "../components/Icons";
import Services from "../components/Services";
import About from "../components/About";
import Doctors from "../components/Doctors";
import Booking from "../components/Booking";
import Review from "../components/Review";
import Blogs from "../components/Blogs";

function Content() {
  return (
    <>
      <Home></Home>
      <Icons></Icons>
      <Services></Services>
      <About></About>
      <Doctors></Doctors>
      <Booking></Booking>
      <Review></Review>
      <Blogs></Blogs>
    </>
  );
}

export default Content;
