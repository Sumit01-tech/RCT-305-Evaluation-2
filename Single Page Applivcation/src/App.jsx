import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import HomePage from "./components/HomePage";
import favouritesPage from "./components/FavouritesPage";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/favourites">Favourites</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favourites" element={<favouritesPage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;