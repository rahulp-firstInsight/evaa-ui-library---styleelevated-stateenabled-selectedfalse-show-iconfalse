import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Chips } from "./components/chips";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <div style={{ padding: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      <Chips labelText="Default" />
      <Chips labelText="With Icon" showIcon />
      <Chips labelText="Selected" selected />
      <Chips labelText="Pressed" pressed />
      <Chips labelText="Selected + Icon" selected showIcon />
    </div>
  </StrictMode>,
);
