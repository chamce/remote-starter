import { useState, useEffect } from "react";

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
function getTextColor(bgColor) {
  const lightContrast = getContrast(bgColor, "#f8f9fa");
  const darkContrast = getContrast(bgColor, "#212529");

  return lightContrast > darkContrast ? "light" : "dark";
}

export const useBodyBgColor = (footerRef) => {
  const [bgColor, setBgColor] = useState(
    window.localStorage.getItem("backgroundColor")
      ? window.localStorage.getItem("backgroundColor")
      : "#495057"
  );
  const textColor = getTextColor(bgColor);

  useEffect(() => {
    window.localStorage.setItem("backgroundColor", bgColor);
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);
  useEffect(() => {
    if (footerRef.current) {
      footerRef.current.className = "container footer-container-" + textColor;
    }
  }, [textColor, footerRef]);

  return [bgColor, setBgColor];
};
