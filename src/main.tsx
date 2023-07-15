import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { pokemonStore } from "./stores/pokemonStore.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={pokemonStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
