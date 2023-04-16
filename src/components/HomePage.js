import React from "react";
import Banner from "./banner";
import Footer from "./Footer";
import { render } from "@testing-library/react";
import CardsList from "./CardsList";

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
        <div className="cards-container">
          <CardsList />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
