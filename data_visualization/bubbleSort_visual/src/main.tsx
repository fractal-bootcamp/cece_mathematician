import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import BubbleSortVisualizer from "./bubbleSortVisual.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BubbleSortVisualizer />
  </StrictMode>
);
