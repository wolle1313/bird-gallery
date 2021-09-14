import React from "react";
import ReactDOM from "react-dom";
import SimpleReactLightbox from "simple-react-lightbox";

import AppProvider from "./components/AppContext";
import App from "./pages/App";

import "./index.css";

ReactDOM.render(
  <SimpleReactLightbox>
    <AppProvider>
      <App />
    </AppProvider>
  </SimpleReactLightbox>,
  document.getElementById("root")
);
