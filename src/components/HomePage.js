import React from "react";
import Banner from "./banner";
import { render } from "@testing-library/react";

function HomePage() {
  return (
    <>
      <header>
        <Banner />
      </header>
      <main>
        <div className="image-container">
          <img
            src="/sea-mountains.png"
            alt="mer-montagnes"
            className="front-image"
          />
          <p className="text-image">Chez vous, partout et ailleurs</p>
        </div>
      </main>
    </>
  );
}

export default HomePage;
