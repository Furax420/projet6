import React, { useState, useEffect, useImperativeHandle } from "react";

export const useCollapse = (ref, content, onHeightChange) => {
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

  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return { isOpen, contentRef, toggleContent };
};
