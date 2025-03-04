import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ Children }) => {
    const [favourites, setFavourites] = useState([]);
    const [searchHistory, setSearchHistory] = useState([]);

    const addToFavourites = (country) => {
        setFavourites((prev) => [...prev, country]);
    };

    const removeFromFavourites = (country) => {
        setFavourites((prev) => prev.filter((c) => c.cca2 !== country.cca2));
    };

    const addToSearchHistory = (searchTerm) => {
        setSearchHistory((prev) => {
            const updatedHistory = [searchTerm, ...prev.filter((term) => term !== searchTerm)].slice(0, 5)
            return updatedHistory;
        });
    };

    return (
        <AppContext.Provider value={{ favourites, addToFavourites, removeFromFavourites, searchHistory, addToSearchHistory }}>{Children}</AppContext.Provider>
    );
};