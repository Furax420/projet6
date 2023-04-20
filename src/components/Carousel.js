import React, { useState } from "react";
import "../styles/carousel.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
      setTranslateValue((images.length - 1) * -100);
    } else {
      setCurrentIndex(currentIndex - 1);
      setTranslateValue(translateValue + 100);
    }
  };

  const nextSlide = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
      setTranslateValue(0);
    } else {
      setCurrentIndex(currentIndex + 1);
      setTranslateValue(translateValue - 100);
    }
  };

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
