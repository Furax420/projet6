import React from "react";

function FrontImage({ src, alt, text, isAboutPage }) {
  return (
    <section className={`image-container${isAboutPage ? " about-image" : ""}`}>
      <img
        src={src}
        alt={alt}
        className={`front-image${isAboutPage ? " front-about-image" : ""}`}
      />
      <div className="text-container">{text}</div>
    </section>
  );
}

export default FrontImage;
