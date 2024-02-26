import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./assets/styles/_tailwind.css";
import "./assets/styles/_global.css";

const rootNode = document.getElementById("root");
const root = createRoot(rootNode!);
root.render(<StrictMode children={<App />} />);
