import { useEffect } from "react";

export const useExternalScript = ({ parent, child, attributes }) => {
  useEffect(() => {
    const outer = document.querySelector(parent);
    const inner = document.createElement(child);

    Object.keys(attributes).forEach((key) => {
      inner.setAttribute(key, attributes[key]);
    });

    outer.appendChild(inner);

    return () => {
      outer.removeChild(inner);
    };
  }, [parent, child, attributes]);
};
