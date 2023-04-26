import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
- is it okay for bootstrap & styled-jsx to be set to external deps for the wrapper (not bundled)?

- is it okay to just concatenate the two stylesheets as strings contrary to the docs?

- styles defined in the host app could overwrite styles in the remote--is this okay? are we supposed to define styles outside of components with the default export css to avoid style clashing? does the global definition change any of these circumstances?

- probably just want font on the wrapper, and not on the entire body
*/
