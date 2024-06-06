import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";

/**
 * Renders the React application into the root DOM element.
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Register service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").then(
      /**
       * Handles successful service worker registration.
       * @param {ServiceWorkerRegistration} registration - The service worker registration object.
       */
      (registration) => {
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope,
        );
      },
      /**
       * Handles failed service worker registration.
       * @param {Error} error - The error object containing details of the failure.
       */
      (error) => {
        console.log("ServiceWorker registration failed: ", error);
      },
    );
  });
}
