import React from "react";
import { render } from "@testing-library/react";
import CardsList from "../components/CardsList";

function HomePage() {
  return (
    <>
      <section className="image-container">
        <img
          src="/sea-mountains.png"
          alt="mer-montagnes"
          className="front-image"
        />
        <div className="text-container">{"Chez vous, partout et ailleurs"}</div>
      </section>
      <CardsList />
    </>
  );
}

export default HomePage;
