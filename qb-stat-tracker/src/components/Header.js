import Search from "./Search"
import { NavLink } from "react-router-dom"
import React from "react"
import Sort from "./Sort"

const Header = (props) => {

    const handleLinkClick =(e) => {
        e.preventDefault()
        props.changePageUrl(e.target.pathname)
    }

    return (
        <>
            <nav className="link-container">
                <NavLink className="linkButtons" exact to="/" onClick={handleLinkClick}>Home</NavLink>
                <NavLink className="linkButtons" exact to="/form" onClick={handleLinkClick}>New Player Form</NavLink>
                <NavLink className="linkButtons" exact to="/favorites" onClick={handleLinkClick}>Favorites List</NavLink>
                <NavLink className="linkButtons" exact to="/activelist" onClick={handleLinkClick}>Active List</NavLink>
            </nav>
            <div className="search-sort">
                <Search changeSearch ={props.changeSearch}
                changeSearchValue = {props.changeSearchValue}
                searchValue = {props.searchValue} />
                <Sort changeSortBy = {props.changeSortBy}/>
            </div>
        </>
    )
}

export default Header
