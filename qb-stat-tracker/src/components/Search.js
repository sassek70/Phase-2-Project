import React from "react";

const Search = (props) => {
    return (
        <div>
        <input type="text" 
        id = "search"
        placeholder="Search Quarterbacks"
        onChange={(e) => props.changeSearch(e.target.value)}
        />
        </div>
    )
}

export default Search

