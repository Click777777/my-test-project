import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MovieContext from "./contexts/MovieContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieContext>
        <App />
      </MovieContext>
    </BrowserRouter>
  </React.StrictMode>,
);
