import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CountryCard = ({ country }) => {
    const { favourites, addToFavourites, removeFromFavourites } = useContext(AppContext);
    const isFavourite = favourites.some((c) => c.cca2 === country.cca2);

    const toggleFavourites = () => {
        if (isFavourite) {
            removeFromFavourites(country);
        } else {
            addToFavourites(country);
        }
    };

    return (
        <div className="country-card">
            <img src={`https://flagsapi.com/${country.cca2}/shiny/64.png`} alt={country.name.common} />
            <h2>{country.name.common}</h2>
            <p>Currency: {Object.values(country.currencies).map((c) => c.name).join(", ")}</p>
            <p>Capital: {country.capital}</p>
            <p>Languages: {Object.values(country.languages).join(", ")}</p>
            <button onClick={toggleFavourites}>{isFavourite ? "Remove from Favourites" : "App to Favourites"}</button>
        </div>
    );
};

export default CountryCard;