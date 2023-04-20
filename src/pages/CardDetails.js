// CardDetails.js
import React, { useRef, useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../components/data.json";
import Carousel from "../components/Carousel";
import ExpandableButton from "../components/ExpandableButton";
import "../styles/card-details.css";
import NotFound from "../pages/NotFound";

const CardDetails = () => {
  const { id } = useParams();
  const card = data.find((item) => item.id === id);

  const [maxHeight, setMaxHeight] = useState(0);
  const descriptionRef = useRef();
  const equipmentRef = useRef();
  const [disableHeightAdjustment, setDisableHeightAdjustment] = useState(
    window.innerWidth < 680
  );
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

  useEffect(() => {
    const updateDisableHeightAdjustment = () => {
      setDisableHeightAdjustment(window.innerWidth < 680);
    };

    window.addEventListener("resize", updateDisableHeightAdjustment);
    return () => {
      window.removeEventListener("resize", updateDisableHeightAdjustment);
    };
  }, []);
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
              onHeightChange={updateMaxHeight}
              maxHeight={maxHeight}
              disableHeightAdjustment={disableHeightAdjustment}
            />
            <ExpandableButton
              ref={equipmentRef}
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
