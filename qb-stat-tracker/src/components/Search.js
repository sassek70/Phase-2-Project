import React from "react";

const Search = (props) => {
    return (
        <div className="search-bar">
        <label htmlFor="search">Search Player or Team: </label>
        <input type="text" 
        name="search"
        id = "search"
        placeholder="Search Player or Team"
        onChange={(e) => props.changeSearch(e.target.value)}
        />
        </div>
    )
}

export default Search

