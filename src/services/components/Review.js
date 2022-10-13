import React from "react";

const Review = () => {
  return (
    <section className="review" id="review">
      <h1 className="heading">
        client's <span>review</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <img src="image/pic-1.png" alt="" />
          <h3>john deo</h3>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            sapiente nihil aperiam? Repellat sequi nisi aliquid perspiciatis
            libero nobis rem numquam nesciunt alias sapiente minus voluptatem,
            reiciendis consequuntur optio dolorem!
          </p>
        </div>

        <div className="box">
          <img src="image/pic-2.png" alt="" />
          <h3>john deo</h3>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            sapiente nihil aperiam? Repellat sequi nisi aliquid perspiciatis
            libero nobis rem numquam nesciunt alias sapiente minus voluptatem,
            reiciendis consequuntur optio dolorem!
          </p>
        </div>

        <div className="box">
          <img src="image/pic-3.png" alt="" />
          <h3>john deo</h3>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            sapiente nihil aperiam? Repellat sequi nisi aliquid perspiciatis
            libero nobis rem numquam nesciunt alias sapiente minus voluptatem,
            reiciendis consequuntur optio dolorem!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Review;
