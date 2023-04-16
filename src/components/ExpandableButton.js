// ExpandableButton.js
import React, { useState } from "react";
import "../styles/expandableButton.css";

const ExpandableButton = ({ buttonText, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="expandable-button">
      <button onClick={toggleContent} className="expandable-button-toggle">
        {buttonText}{" "}
        <i className={`fa-solid fa-chevron-${isOpen ? "up" : "down"}`}></i>
      </button>
      <div className={`expandable-button-content ${isOpen ? "open" : ""}`}>
        {content}
      </div>
    </div>
  );
};

export default ExpandableButton;
