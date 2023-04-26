import { useState } from "react";

export const useCarousel = (images) => {
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

  return { currentIndex, translateValue, prevSlide, nextSlide };
};
