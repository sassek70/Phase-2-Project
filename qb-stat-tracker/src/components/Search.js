import React from "react";

const Search = (props) => {
    return (
        <div>
        <input type="text" 
        id = "search"
        placeholder="Search Quarterbacks"
        onChange={(e) => props.changeSearch(e.target.value)}
        />
        <button onClick={props.changeSearchValue}>{props.searchValue ? "Click to Search by Team" : "Click to Search by Name"}</button>
        </div>
    )
}

export default Search

