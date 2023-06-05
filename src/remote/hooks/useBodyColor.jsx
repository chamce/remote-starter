import { useState, useLayoutEffect } from "react";

function getRGB(c) {
  return parseInt(c, 16) || c;
}
function getsRGB(c) {
  return getRGB(c) / 255 <= 0.03928
    ? getRGB(c) / 255 / 12.92
    : Math.pow((getRGB(c) / 255 + 0.055) / 1.055, 2.4);
}
function getLuminance(hexColor) {
  return (
    0.2126 * getsRGB(hexColor.substr(1, 2)) +
    0.7152 * getsRGB(hexColor.substr(3, 2)) +
    0.0722 * getsRGB(hexColor.substr(-2))
  );
}
function getContrast(f, b) {
  const L1 = getLuminance(f);
  const L2 = getLuminance(b);
  return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
}
function getFooterRgb(color) {
  const lightContrast = getContrast(color, "#f8f9fa");
  const darkContrast = getContrast(color, "#212529");

  return lightContrast > darkContrast ? "248, 249, 250" : "33, 37, 41";
}
function setBodyColor(color) {
  document.documentElement.style.setProperty("--body-color", color);
  document.documentElement.style.setProperty(
    "--footer-rgb",
    getFooterRgb(color)
  );
  window.localStorage.setItem("bodyColor", color);
}

export const useBodyColor = () => {
  const [color, setColor] = useState(
    window.localStorage.getItem("bodyColor")
      ? window.localStorage.getItem("bodyColor")
      : "#D1CBC1"
  );

  useLayoutEffect(() => {
    setBodyColor(color);
  }, [color]);

  return [color, setColor];
};
