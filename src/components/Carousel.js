import React, { useState } from "react";
import "../styles/carousel.css";

const Carousel = ({ images }) => {
  // Définir l'état initial pour l'index de l'image actuelle et la valeur de translation
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  // Fonction pour afficher l'image précédente
  const prevSlide = () => {
    if (currentIndex === 0) {
      // Si on est à la première image, aller à la dernière image
      setCurrentIndex(images.length - 1);
      setTranslateValue((images.length - 1) * -100);
    } else {
      // Sinon, aller à l'image précédente
      setCurrentIndex(currentIndex - 1);
      setTranslateValue(translateValue + 100);
    }
  };

  // Fonction pour afficher l'image suivante
  const nextSlide = () => {
    if (currentIndex === images.length - 1) {
      // Si on est à la dernière image, retourner à la première image
      setCurrentIndex(0);
      setTranslateValue(0);
    } else {
      // Sinon, aller à l'image suivante
      setCurrentIndex(currentIndex + 1);
      setTranslateValue(translateValue - 100);
    }
  };

  return (
    <section className="carousel">
      {/* Afficher les boutons de navigation et l'indicateur si plusieurs images */}
      {images.length > 1 && (
        <>
          {/* Bouton pour aller à l'image précédente */}
          <button className="carousel-btn prev-btn" onClick={prevSlide}>
            &#10094;
          </button>
          {/* Bouton pour aller à l'image suivante */}
          <button className="carousel-btn next-btn" onClick={nextSlide}>
            &#10095;
          </button>
          {/* Indicateur d'image actuelle et nombre total d'images */}
          <div className="carousel-indicator">
            {currentIndex + 1}/{images.length}
          </div>
        </>
      )}
      {/* Conteneur des images du carrousel */}
      <div
        className="carousel-images"
        // Appliquer la transformation pour déplacer les images en fonction de la valeur de translation
        style={{ transform: `translateX(${translateValue}%)` }}
      >
        {/* Mapper les images pour les afficher dans le carrousel */}
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
