
/* Import React */
import React from "react";

/* Import ReactDOM */
import ReactDOM from "react-dom/client";

/* Import the main App component */
import App from "./App.jsx";

/* Import global CSS */
import "./index.css";

/* Render the React application */
ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
