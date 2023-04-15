import React from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div className="logo">
        <img src="/K.png" alt="K" className="image" />
        <img src="/House.png" alt="House" className="image" />
        <img src="/S.png" alt="S" className="image" />
        <img src="/A.png" alt="A" className="image" />
      </div>
      <div className="navigation">
        <NavLink
          exact="true"
          to="/"
          activeclassname="active"
          className="nav-link"
        >
          Accueil
        </NavLink>
        <NavLink to="/apropos" activeclassname="active" className="nav-link">
          À Propos
        </NavLink>
      </div>
    </div>
  );
};

export default Banner;
