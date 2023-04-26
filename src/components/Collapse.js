import React from "react";
import "../styles/collapse.css";
import "../styles/about-collapse.css";
import { useCollapse } from "../functions/CollapseFunction";

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
    const { isOpen, contentRef, toggleContent } = useCollapse(
      ref,
      content,
      onHeightChange
    );

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
