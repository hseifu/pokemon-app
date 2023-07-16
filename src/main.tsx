import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ApplicationProvider from "./providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApplicationProvider />
  </React.StrictMode>
);
