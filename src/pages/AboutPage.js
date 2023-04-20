import React from "react";
import { render } from "@testing-library/react";
import Banner from "../components/banner";
import ExpandableButton from "../components/ExpandableButton";
import "../styles/about-collapse.css";

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
        <div className="about-collapse">
          <ExpandableButton
            className="collapse"
            buttonText="Fiabilité"
            content={
              <p>
                Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les
                informations sont régulièrement vérifiées par nos équipes.
              </p>
            }
            aboutPage={true}
          />
          <ExpandableButton
            className="collapse"
            buttonText="Respect"
            content={
              <p>
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme.
              </p>
            }
            aboutPage={true}
          />
          <ExpandableButton
            className="collapse"
            buttonText="Service"
            content={
              <p>
                Nos équipes se tiennent à votre disposition pour vous fournir
                une expérience parfaite. N'hésitez pas à nous contacter si vous
                avez la moindre question.
              </p>
            }
            aboutPage={true}
          />
          <ExpandableButton
            className="collapse"
            buttonText="Sécurité"
            content={
              <p>
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                que pour les voyageurs, chaque logement correspond aux critères
                de sécurité établis par nos services. En laissant une note aussi
                bien à l'hôte qu'au locataire, cela permet à nos équipes de
                vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos
                hôtes.
              </p>
            }
            aboutPage={true}
          />
        </div>
      </main>
    </>
  );
}

export default AboutPage;
