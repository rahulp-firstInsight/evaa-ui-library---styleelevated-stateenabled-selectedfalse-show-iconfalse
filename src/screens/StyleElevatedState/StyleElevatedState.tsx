import React from "react";
import { SuggestionChip } from "../../components/SuggestionChip";
import "./style.scss";

export const StyleElevatedState = (): JSX.Element => {
  return (
    <SuggestionChip
      data-model-id="422:12205"
      className="suggestion-chip-instance"
      labelText="Label"
      selected={false}
      showIcon={false}
      style="elevated"
    />
  );
};
