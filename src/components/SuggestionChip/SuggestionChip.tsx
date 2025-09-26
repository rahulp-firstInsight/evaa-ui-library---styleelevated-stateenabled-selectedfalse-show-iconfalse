import React from "react";
import "./style.scss";

interface Props {
  labelText: string;
  showFocusIndicator: boolean;
  style: "elevated";
  pressed: boolean;
  selected: boolean;
  showIcon: boolean;
  className: any;
}

export const SuggestionChip = ({
  labelText = "Label",
  showFocusIndicator = false,
  style,
  pressed = false,
  selected,
  showIcon,
  className,
}: Props): JSX.Element => {
  return (
    <div className={`suggestion-chip pressed-${pressed} ${className}`}>
      <div className="state-layer">
        <div className="label-text">{labelText}</div>
      </div>
    </div>
  );
};
