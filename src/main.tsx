import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRoutes from "./Routes";
import { GlobalStyle } from "./GlobalStyle";
// import { AppThemeProvider } from "./Contexts/ThemeContext";
 
createRoot(document.getElementById("root")!).render(
  // <AppThemeProvider>
  
  <BrowserRouter>
  <GlobalStyle />
      <AppRoutes />
    </BrowserRouter>
  // </AppThemeProvider>
);
