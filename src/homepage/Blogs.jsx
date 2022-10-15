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
      <HeadingSecondary>Most updated content for uyour healh</HeadingSecondary>

      <div className="box-container">
        <div className="box">
          <div className="image">
            <img src={BlogImage1} alt="" />
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
            <h3>blog title goes here</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident, eius.
            </p>
            <a href="a" className="btn">
              learn more <span className="fas fa-chevron-right"></span>
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
                <i className="fas fa-calendar"></i> 1st may, 2021
              </a>
              <a href="a">
                <i className="fas fa-user"></i> by admin
              </a>
            </div>
            <h3>blog title goes here</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident, eius.
            </p>
            <a href="a" className="btn">
              learn more <span className="fas fa-chevron-right"></span>
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
            <h3>blog title goes here</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident, eius.
            </p>
            <a href="a" className="btn">
              learn more <span className="fas fa-chevron-right"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
