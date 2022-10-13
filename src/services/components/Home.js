import React from "react";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="image">
        <img src="image/home-img.svg" alt="" />
      </div>

      <div className="content">
        <h3>stay safe, stay healthy</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed autem
          vero? Magnam, est laboriosam!
        </p>
        <a href="a" className="btn">
          contact us <span className="fas fa-chevron-right"></span>
        </a>
      </div>
    </section>
  );
};

export default Home;
