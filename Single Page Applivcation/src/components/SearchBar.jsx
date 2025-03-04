import React, { useRef, useEffect } from "react";
import debounce from "debounce";

const SearchBar = ({ onSearch }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleInputChange = debounce((e) => {
        onSearch(e.target.value);
    }, 500);

    return (
        <input type="text" ref={inputRef} placeholder="Search by currency code" onChange={handleInputChange} />
    );
};

export default SearchBar;