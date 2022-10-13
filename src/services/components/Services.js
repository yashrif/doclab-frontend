import React from "react";

const Services = () => {
  return (
    <section className="services" id="services">
      <h1 className="heading">
        our <span>services</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <i className="fas fa-notes-medical"></i>
          <h3>free checkups</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.
          </p>
          <a href="a" className="btn">
            learn more <span className="fas fa-chevron-right"></span>
          </a>
        </div>

        <div className="box">
          <i className="fas fa-ambulance"></i>
          <h3>24/7 ambulance</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.
          </p>
          <a href="a" className="btn">
            learn more <span className="fas fa-chevron-right"></span>
          </a>
        </div>

        <div className="box">
          <i className="fas fa-user-md"></i>
          <h3>expert doctors</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.
          </p>
          <a href="a" className="btn">
            learn more <span className="fas fa-chevron-right"></span>
          </a>
        </div>

        <div className="box">
          <i className="fas fa-pills"></i>
          <h3>medicines</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.
          </p>
          <a href="a" className="btn">
            learn more <span className="fas fa-chevron-right"></span>
          </a>
        </div>

        <div className="box">
          <i className="fas fa-procedures"></i>
          <h3>bed facility</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.
          </p>
          <a href="a" className="btn">
            learn more <span className="fas fa-chevron-right"></span>
          </a>
        </div>

        <div className="box">
          <i className="fas fa-heartbeat"></i>
          <h3>total care</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.
          </p>
          <a href="a" className="btn">
            learn more <span className="fas fa-chevron-right"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
