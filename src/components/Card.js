// Card.js
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/card.css";

const Card = ({ id, title, cover }) => (
  <div className="card">
    <NavLink to={`/card/${id}`}>
      <div className="card-content">
        <div className="card-image-wrapper">
          <img src={cover} alt={title} className="card-image" />
        </div>
        <h3 className="card-title">{title}</h3>
      </div>
    </NavLink>
  </div>
);

export default Card;
