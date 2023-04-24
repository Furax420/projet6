import React from "react";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Footer from "./Footer";
import Banner from "./banner";
import NotFound from "../pages/NotFound";
import CardDetails from "../pages/CardDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/style.css";

function MainRouter() {
  return (
    <Router>
      <div className="app-container">
        <Banner />
        <div className="content-wrapper">
          <main className="App">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/apropos" element={<AboutPage />} />
              <Route path="/card/:id" element={<CardDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default MainRouter;
