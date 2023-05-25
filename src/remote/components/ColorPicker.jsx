import { useCallback, useRef, useState } from "react";
import { useClickOutside } from "../hooks/useClickOutside";
import { HexColorPicker } from "react-colorful";
import { useBodyColor } from "../hooks/useBodyColor";

export const ColorPicker = () => {
  const [color, setColor] = useBodyColor();

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
        <div className="popover shadow-4" ref={popover}>
          <HexColorPicker color={color} onChange={setColor} />
        </div>
      )}
    </div>
  );
};
