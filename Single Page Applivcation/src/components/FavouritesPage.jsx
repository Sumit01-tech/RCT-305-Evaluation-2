import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import CountryCard from "./CountryCard";

const favouritesPage = () => {
    const { favourites } = useContext(AppContext);

    return (
        <div>
            <h1>Favourite Countries</h1>
            {favourites.length > 0 ? (
                <div>
                    {favourites.map((country) => (
                        <CountryCard key={country.cca2} country={country} />
                    ))}
                </div>
            ) : (
                <p>No favourite countries added yet</p>
            )}
        </div>
    );
}

export default favouritesPage;
