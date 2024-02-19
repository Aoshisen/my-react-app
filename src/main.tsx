import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/styles/_tailwind.css";
import "./assets/styles/_global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
