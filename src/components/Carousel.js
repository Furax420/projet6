import React from "react";
import "../styles/carousel.css";
import { useCarousel } from "../functions/CarouselFunction";

const Carousel = ({ images }) => {
  const { currentIndex, translateValue, prevSlide, nextSlide } =
    useCarousel(images);

  return (
    <section className="carousel">
      {images.length > 1 && (
        <>
          <button className="carousel-btn prev-btn" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="carousel-btn next-btn" onClick={nextSlide}>
            &#10095;
          </button>
          <div className="carousel-indicator">
            {currentIndex + 1}/{images.length}
          </div>
        </>
      )}
      <div
        className="carousel-images"
        style={{ transform: `translateX(${translateValue}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`carousel-image-${index}`}
            className="carousel-image"
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
