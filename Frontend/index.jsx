import { createRoot } from "react-dom/client";
import App from "./src/App.jsx";
import AppProviders from "./src/app/providers/AppProviders.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <AppProviders>
    <App />
  </AppProviders>
);
