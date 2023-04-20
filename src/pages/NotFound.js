import React from "react";
import { NavLink } from "react-router-dom";
import Banner from "../components/banner";

const NotFound = () => {
  return (
    <>
      <header>
        <Banner />
      </header>
      <div className="block-404">
        <h1 className="h1-404">404</h1>
        <p className="text-404">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <div className="back-home">
          <NavLink exact="true" to="/" className="back-home-nav">
            Retourner sur la page d'accueil
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NotFound;
