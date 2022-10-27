import Search from "./Search"
import { NavLink } from "react-router-dom"
import React, { useState } from "react"
import Sort from "./Sort"

const Header = (props) => {
    const [pathName, setPathName] = useState("/")

    console.log(pathName)

    const handleLinkClick =(e) => {
        e.preventDefault()
        props.changePageUrl(e.target.pathname)
        setPathName(e.target.pathname)
    }

    return (
        <>
            <nav className="link-container">
                <NavLink className="linkButtons" to="/" onClick={handleLinkClick}>Home</NavLink>
                <NavLink className="linkButtons" to="/form" onClick={handleLinkClick}>New Player Form</NavLink>
                <NavLink className="linkButtons" to="/favorites" onClick={handleLinkClick}>Favorites List</NavLink>
                <NavLink className="linkButtons" to="/activelist" onClick={handleLinkClick}>Active List</NavLink>
            </nav>
            {pathName === "/form" || pathName === "/EditForm" ? 
            null
            :
            <div className="search-sort">
                <Search changeSearch ={props.changeSearch}
                changeSearchValue = {props.changeSearchValue}
                searchValue = {props.searchValue} />
                <Sort changeSortBy = {props.changeSortBy}/>
            </div>
            }
        </>
    )
}

export default Header
