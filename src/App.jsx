import React from "react";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import FavouritePage from "./Pages/FavouritePage/FavouritePage";
import AboutMePage from "./Pages/AboutMePage/AboutMePage";
import UniqueDetail from "./Pages/UniqueDetail/UniqueDetail"; // Importa el componente de detalles

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Favourites" element={<FavouritePage />} />
          <Route path="/AboutMePage" element={<AboutMePage />} />
          <Route path="/character/:id" element={<UniqueDetail />} /> 
        </Routes>
      </Router>
    </div>
  );
};

export default App;
