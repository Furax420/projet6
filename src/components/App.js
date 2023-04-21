import React from "react";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Footer from "./Footer";
import Banner from "./banner";
import NotFound from "../pages/NotFound";
import CardsList from "./CardsList";
import CardDetails from "../pages/CardDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/style.css";
import "../styles/notfound.css";
import "../styles/footer.css";
import "../styles/banner.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Banner />
        <div className="content-wrapper">
          <main className="App">
            <Routes>
              {/* La route vers la page d'accueil  "/" */}
              <Route path="/" element={<HomePage />} />

              {/* La route vers la page "À propos"*/}
              <Route path="/apropos" element={<AboutPage />} />

              {/* La route vers les détails d'une carte, :id est un paramètre pour l'identifiant de la carte */}
              <Route path="/card/:id" element={<CardDetails />} />

              {/* La route pour gérer les URL non trouvés (404), accessible depuis n'importe quel URL non défini précédemment */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
