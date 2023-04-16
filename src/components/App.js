import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import NotFound from "./NotFound";
import CardsList from "./CardsList";
import CardDetails from "./CardDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/style.css";
import "../styles/notfound.css";
import "../styles/footer.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apropos" element={<AboutPage />} />
          <Route path="/cards" element={<CardsList />} />
          <Route path="/card/:id" element={<CardDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
