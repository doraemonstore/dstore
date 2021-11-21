import React from "react";
import Ca1 from "../img/ca1.jpg";
import Ca2 from "../img/ca2.jpg";
import Ca3 from "../img/ca3.jpg";
import "./Carousel.css";

function Carousel(props) {
  return (
    <div
      id="carouselExampleControls"
      class="carousel carousel-fade slide border"
      data-bs-ride="carousel"
      data-interval="1000"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={Ca1} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={Ca2} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={Ca3} class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
