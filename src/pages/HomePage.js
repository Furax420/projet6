import React from "react";
import CardsList from "../components/CardsList";
import FrontImage from "../components/FrontImage";
import "../styles/front-image.css";

function HomePage() {
  return (
    <>
      <FrontImage
        src="/sea-mountains.png"
        alt="mer-montagnes"
        text="Chez vous, partout et ailleurs"
      />
      <CardsList />
    </>
  );
}

export default HomePage;
