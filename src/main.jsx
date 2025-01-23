import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
// import './index.css'
import App from "./App.jsx";
import ErrorFallback from "./ui/ErrorFallback.jsx";
import GlobalStyles from "./styles/GlobalStyles.js";

createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyles />
    <StrictMode>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.replace("/")}
      >
        <App />
      </ErrorBoundary>
    </StrictMode>
  </>
);
