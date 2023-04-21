// CardDetails.js
import React, { useRef, useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../components/data.json";
import Carousel from "../components/Carousel";
import ExpandableButton from "../components/ExpandableButton";
import "../styles/card-details.css";
import NotFound from "../pages/NotFound";

const CardDetails = () => {
  // Récupérer l'identifiant de la carte à partir de l'URL
  const { id } = useParams();
  // Trouver la carte correspondante dans les données
  const card = data.find((item) => item.id === id);

  // Définir l'état pour la hauteur maximale et les références pour les sections de contenu
  const [maxHeight, setMaxHeight] = useState(0);
  const descriptionRef = useRef();
  const equipmentRef = useRef();
  const [disableHeightAdjustment, setDisableHeightAdjustment] = useState(
    window.innerWidth < 680
  );

  // Mettre à jour la hauteur maximale en fonction de la nouvelle hauteur
  const updateMaxHeight = useCallback(
    (newHeight) => {
      if (!disableHeightAdjustment) {
        setMaxHeight((prevHeight) => Math.max(prevHeight, newHeight));
      } else {
        setMaxHeight("auto");
      }
    },
    [disableHeightAdjustment]
  );

  // Gérer l'ajustement de la hauteur en fonction de la taille de l'écran
  useEffect(() => {
    const updateDisableHeightAdjustment = () => {
      setDisableHeightAdjustment(window.innerWidth < 680);
    };

    window.addEventListener("resize", updateDisableHeightAdjustment);
    return () => {
      window.removeEventListener("resize", updateDisableHeightAdjustment);
    };
  }, []);

  // Afficher la page "Not Found" si aucune carte n'est trouvée
  if (!card) {
    return <NotFound />;
  }

  return (
    <>
      <section className="card-details">
        <Carousel images={card.pictures} />
        <div className="details-container">
          <div className="title-card">
            <div className="title-and-location">
              <h2>{card.title}</h2>
              <p className="location">{card.location}</p>
            </div>
            <div className="host-info">
              <p className="host-name">{card.host.name}</p>
              <img
                src={card.host.picture}
                alt={card.host.name}
                className="host-image"
              />
            </div>
          </div>
          <div className="tags-rating">
            <div className="tags">
              {card.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="rating">
              {/* Dans ce code, deux boucles map sont utilisées pour générer des étoiles pleines (rouges) et vides (grises) en fonction de la note card.rating. La première boucle affiche des étoiles pleines pour chaque point de la note, tandis que la seconde boucle affiche des étoiles vides pour combler la différence entre la note et 5 (le nombre total d'étoiles). */}
              {[...Array(parseInt(card.rating))].map((_, index) => (
                <i
                  key={index}
                  className="fa-solid fa-star"
                  style={{
                    color: "#ff6060",
                    fontSize: "24px",
                    width: "24.75px",
                    marginLeft: "15px",
                  }}
                ></i>
              ))}
              {[...Array(5 - parseInt(card.rating))].map((_, index) => (
                <i
                  key={index}
                  className="fa-solid fa-star"
                  style={{
                    color: "#E3E3E3",
                    fontSize: "24px",
                    width: "24.75px",
                    marginLeft: "15px",
                  }}
                ></i>
              ))}
            </div>
          </div>
          <div className="description-equipement">
            <ExpandableButton
              ref={descriptionRef}
              className="description"
              buttonText="Description"
              content={<p>{card.description}</p>}
              // updateMaxHeight est appelé lorsqu'un boutton est étendu pour ajuster la hauteur maximale des deux bouttons.
              onHeightChange={updateMaxHeight}
              maxHeight={maxHeight}
              //  indique si l'ajustement de la hauteur doit être désactivé en fonction de la largeur de la fenêtre
              disableHeightAdjustment={disableHeightAdjustment}
            />
            <ExpandableButton
              ref={equipmentRef}
              className="equipement"
              buttonText="Équipements"
              content={
                <ul className="equipment-list">
                  {/*  liste non ordonnée des équipements mappés à partir de card.equipments. */}
                  {card.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              }
              onHeightChange={updateMaxHeight}
              maxHeight={maxHeight}
              disableHeightAdjustment={disableHeightAdjustment}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CardDetails;
