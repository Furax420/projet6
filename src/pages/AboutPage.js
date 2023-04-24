import React from "react";
import Collapse from "../components/Collapse";
import FrontImage from "../components/FrontImage";
import "../styles/front-image.css";
import Data from "../data/about-data.json";
import "../styles/about-collapse.css";

function AboutPage() {
  return (
    <>
      <FrontImage
        src="/mountains.png"
        alt="montagnes"
        text=""
        isAboutPage={true}
      />
      <section className="about-collapse">
        {Data.map((item) => (
          <Collapse
            key={item.id}
            className="collapse"
            buttonText={item.title}
            content={<p>{item.description}</p>}
            aboutPage={true}
          />
        ))}
      </section>
    </>
  );
}

export default AboutPage;
