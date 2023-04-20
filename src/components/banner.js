import React from "react";
import "../styles/banner.css";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <header className="banner">
      <div className="logo">
        <img src="/Kasa.logo.png" alt="Kasalogo" className="image" />
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
    </header>
  );
};

export default Banner;
