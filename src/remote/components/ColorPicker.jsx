import { useCallback, useRef, useState } from "react";
import { useClickOutside } from "../hooks/useClickOutside.jsx";
import { HexColorPicker } from "react-colorful";

export const ColorPicker = () => {
  const [color, onChange] = useState("#aabbcc");
  const popover = useRef();
  const [isOpen, toggle] = useState(false);

  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  return (
    <div className="picker">
      <div
        className="swatch"
        style={{ backgroundColor: color }}
        onClick={() => toggle(true)}
      />

      {isOpen && (
        <div className="popover" ref={popover}>
          <HexColorPicker color={color} onChange={onChange} />
        </div>
      )}
    </div>
  );
};
