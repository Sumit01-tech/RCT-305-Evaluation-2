import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import SearchBar from "./SearchBar";
import CountryCard from "./CountryCard";

const HomePage = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const { searchHistory, addToSearchHistory } = useContext(AppContext);
    const fetchCountries = async (currencyCode) => {
        setLoading(true);
        try {
            const response = await fetch(`https://restcountries.com/v3.1/currency/${currencyCode}`);
            const data = await response.json();
            setCountries(data);
            addToSearchHistory(currencyCode);
        } catch (error) {
            console.error("Error fetching countries:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Country Information by Currency Code</h1>
            <SearchBar onSearch={fetchCountries} />
            {loading && <p>Loading</p>}
            {countries.length > 0 ? (
                <div>
                    {countries.map((country) => (
                        <CountryCard key={country.cca2} country={country} />

                    ))}
                </div>
            ) : (
                <p>No countries found.</p>
            )
            }
            <div>
                <h2>Search History</h2>
                {searchHistory.length > 0 ? (
                    <ul>
                        {searchHistory.map((term, index) => (
                            <li key={index}>{term}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No search history available</p>
                )}
            </div>
        </div >
    );
};

export default HomePage;