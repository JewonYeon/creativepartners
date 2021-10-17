import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./context/routes/Routes.jsx";
import { ViewportProvider } from "./context/hooks/useViewport.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <ViewportProvider>
        <Routes />
      </ViewportProvider>
    </BrowserRouter>
  );
};

export default App;
