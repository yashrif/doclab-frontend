import React from "react";
import BlogImage1 from "../assets/img/blog-1.jpg";
import BlogImage2 from "../assets/img/blog-2.jpg";
import BlogImage3 from "../assets/img/blog-3.jpg";
import HeadingPrimary from "./reusable/HeadingPrimary.jsx";
import HeadingSecondary from "./reusable/HeadingSecondary.jsx";

const Blogs = () => {
  return (
    <section className="blogs" id="blogs" style={{ padding: "0 4.8rem" }}>
      <HeadingPrimary>Our blogs</HeadingPrimary>
      <HeadingSecondary>Most updated content for your healh</HeadingSecondary>

      <div className="box-container">
        <div className="box">
          <div className="image">
            <img src={BlogImage1} alt="" />
          </div>
          <div className="content">
            <div className="icon">
              <a href="a">
                <i className="fas fa-calendar"></i> 16 Sept, 2022
              </a>
              <a href="a">
                <i className="fas fa-user"></i> by Dietetian
              </a>
            </div>
            <h3>Take Healthy Foods!!!</h3>
            <p>
              <li>May help live longer.</li>
              <li>Boosts immunity.</li>
              <li>Keeps skin,teeth,eyes healthy.</li>
              <li>Supports muscles</li>
              <li>Strengthens bones</li>
            </p>
            <a href="a" className="btn">
              Learn more <span className="fas fa-chevron-right"></span>
            </a>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={BlogImage2} alt="" />
          </div>
          <div className="content">
            <div className="icon">
              <a href="a">
                <i className="fas fa-calendar"></i> 14 Feb, 2019
              </a>
              <a href="a">
                <i className="fas fa-user"></i> by admin
              </a>
            </div>
            <h3>Check Up at Home</h3>
            <p>
              Checking health at home is a good thing. You can check your
              temperature, blood pressure, heart rate and so on to keep yourself
              motivated and improve your physical condition.
            </p>
            <a href="a" className="btn">
              Learn more <span className="fas fa-chevron-right"></span>
            </a>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={BlogImage3} alt="" />
          </div>
          <div className="content">
            <div className="icon">
              <a href="a">
                <i className="fas fa-calendar"></i> 1st may, 2021
              </a>
              <a href="a">
                <i className="fas fa-user"></i> by admin
              </a>
            </div>
            <h3>Tobacco Kills</h3>
            <p>
              Tobacco kills more than 8 million people each year. Among them
              more than 1.2 million deaths are the result of non-smokers being
              exposed to second-hand smoke.
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

export default Blogs;
