// CardDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import data from "../components/data.json";
import Banner from "../components/banner";
import Carousel from "../components/Carousel";
import ExpandableButton from "../components/ExpandableButton";
import "../styles/card-details.css";
import { NavLink } from "react-router-dom";
import NotFound from "../pages/NotFound";

const CardDetails = () => {
  const { id } = useParams();
  const card = data.find((item) => item.id === id);

  if (!card) {
    return <NotFound />;
  }

  return (
    <div className="card-details">
      <Banner />
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
            className="description"
            buttonText="Description"
            content=<p>{card.description}</p>
          />
          <ExpandableButton
            className="equipement"
            buttonText="Équipements"
            content={
              <p>
                <ul className="equipment-list">
                  {card.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              </p>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
