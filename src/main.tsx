import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter } from "react-router-dom";
import { KeyProvider } from "@/process/KeyProvider.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <KeyProvider>
          <App />
        </KeyProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
