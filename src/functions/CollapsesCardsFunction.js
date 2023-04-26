// CollapsesCardsFunction.js
import { useState, useCallback, useEffect } from "react";

export const useCollapsesCards = () => {
  const [maxHeight, setMaxHeight] = useState(0);
  const [disableHeightAdjustment, setDisableHeightAdjustment] = useState(
    window.innerWidth < 680
  );

  const updateMaxHeight = useCallback(
    (newHeight) => {
      if (!disableHeightAdjustment) {
        setMaxHeight((prevHeight) => Math.max(prevHeight, newHeight));
      } else {
        setMaxHeight("auto");
      }
    },
    [disableHeightAdjustment]
  );

  useEffect(() => {
    const updateDisableHeightAdjustment = () => {
      setDisableHeightAdjustment(window.innerWidth < 680);
    };

    window.addEventListener("resize", updateDisableHeightAdjustment);
    return () => {
      window.removeEventListener("resize", updateDisableHeightAdjustment);
    };
  }, []);

  return {
    maxHeight,
    disableHeightAdjustment,
    updateMaxHeight,
  };
};
