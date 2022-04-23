import React from "react";
import Product from "./Product";

function Home() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://res.cloudinary.com/donghcmute/image/upload/v1648753412/img1_zaact9.jpg"
              className="d-block w-100"
              alt="Iphone"
              height="500px"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://res.cloudinary.com/donghcmute/image/upload/v1648753430/img2_c7fyb9.jpg"
              className="d-block w-100"
              alt="Iphone"
              height="500px"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://res.cloudinary.com/donghcmute/image/upload/v1648753417/img3_t9mahh.jpg"
              className="d-block w-100"
              alt="Iphone"
              height="500px"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://res.cloudinary.com/donghcmute/image/upload/v1648753421/img4_ik3pox.jpg"
              className="d-block w-100"
              alt="Iphone"
              height="500px"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Product/>
    </>
  );
}

export default Home;
