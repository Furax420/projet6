// CardDetails.js
import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import "../styles/card-details.css";
import NotFound from "../pages/NotFound";
import { useCollapsesCards } from "../functions/CollapsesCardsFunction";

const CardDetails = () => {
  // Récupérer l'identifiant de la carte à partir de l'URL
  const { id } = useParams();
  // Trouver la carte correspondante dans les données
  const card = data.find((item) => item.id === id);

  // Utiliser les fonctions définies dans CollapsesCardsFunction.js
  const { maxHeight, disableHeightAdjustment, updateMaxHeight } =
    useCollapsesCards();

  // Définir les références pour les sections de contenu
  const descriptionRef = useRef();
  const equipmentRef = useRef();

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
                <i key={index} className="fa-solid fa-star red-star"></i>
              ))}
              {[...Array(5 - parseInt(card.rating))].map((_, index) => (
                <i key={index} className="fa-solid fa-star grey-star"></i>
              ))}
            </div>
          </div>
          <div className="description-equipement">
            <Collapse
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
            <Collapse
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
