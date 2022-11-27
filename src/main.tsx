import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TrpcProvider from "./providers";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TrpcProvider>
      <App />
    </TrpcProvider>
  </React.StrictMode>
);
