import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './index.css';  // 👈 import generated Tailwind file

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
