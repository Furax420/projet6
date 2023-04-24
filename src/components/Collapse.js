// Collapse.js
import React, { useState, useEffect, useImperativeHandle } from "react";
import "../styles/collapse.css";
import "../styles/about-collapse.css";
const Collapse = React.forwardRef(
  (
    {
      className,
      buttonText,
      content,
      aboutPage,
      onHeightChange = () => {},
      maxHeight,
      disableHeightAdjustment,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = React.useRef();

    useEffect(() => {
      if (contentRef.current) {
        onHeightChange(contentRef.current.scrollHeight);
      }
    }, [content, onHeightChange]);

    useImperativeHandle(ref, () => ({
      updateHeight: () => {
        onHeightChange(contentRef.current.scrollHeight);
      },
    }));

    const toggleContent = () => {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    const contentStyle = {
      height: isOpen && !disableHeightAdjustment ? maxHeight : "auto",
    };

    return (
      <div
        className={`expandable-button ${className} ${aboutPage ? "about" : ""}`}
      >
        <button onClick={toggleContent} className="expandable-button-toggle">
          {buttonText}{" "}
          <i className={`fa-solid fa-chevron-${isOpen ? "up" : "down"}`}></i>
        </button>
        <div
          className={`expandable-button-content ${isOpen ? "open" : ""}`}
          ref={contentRef}
          style={contentStyle}
        >
          {content}
        </div>
      </div>
    );
  }
);

export default Collapse;
