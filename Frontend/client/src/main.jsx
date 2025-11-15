import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import * as Sentry from "@sentry/react";


Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  tracesSampleRate: 1.0, 
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
