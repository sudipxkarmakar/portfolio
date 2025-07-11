import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../public/style.css"; // Ensure Tailwind styles are applied

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
