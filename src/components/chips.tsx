import React from "react";
import "./chips.scss";

interface ChipsProps {
  labelText?: string;
  pressed?: boolean;
  selected?: boolean;
  showIcon?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Chips = ({
  labelText = "Label",
  pressed = false,
  selected = false,
  showIcon = false,
  className = "",
  onClick
}: ChipsProps): JSX.Element => {
  return (
    <div 
      className={`chips ${pressed ? 'pressed' : ''} ${selected ? 'selected' : ''} ${className}`}
      onClick={onClick}
    >
      <div className="state-layer">
        {showIcon && <div className="icon" />}
        <div className="label-text">{labelText}</div>
      </div>
    </div>
  );
};
