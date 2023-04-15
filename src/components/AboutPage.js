import React from "react";
import { render } from "@testing-library/react";
import Banner from "./banner";

function AboutPage() {
  return (
    <>
      <header>
        <Banner />
      </header>
      <main>
        <div className="image-container">
          <img src="/mountains.png" alt="montagnes" className="front-image" />
        </div>
      </main>
    </>
  );
}

export default AboutPage;
