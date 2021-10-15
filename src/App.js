import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./context/routes/Routes.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
