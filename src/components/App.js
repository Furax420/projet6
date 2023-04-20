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
    <div className="app-container">
      <div className="main-content">
        <Router>
          <Banner />
          <main className="App">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/apropos" element={<AboutPage />} />
              <Route path="/cards" element={<CardsList />} />
              <Route path="/card/:id" element={<CardDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
