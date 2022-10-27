import Search from "./Search"
import { NavLink } from "react-router-dom"
import React, { useState } from "react"
import Sort from "./Sort"

const Header = (props) => {



    return (
        <>
            <nav className="link-container">
                <NavLink className="linkButtons" name="home" to="/" onClick={props.handleLinkClick}>Home</NavLink>
                <NavLink className="linkButtons" name="New Player Form" to="/form" onClick={props.handleLinkClick}>New Player Form</NavLink>
                <NavLink className="linkButtons" name="Favorites List" to="/favorites" onClick={props.handleLinkClick}>Favorites List</NavLink>
                <NavLink className="linkButtons" name="Active List" to="/activelist" onClick={props.handleLinkClick}>Active List</NavLink>
            </nav>
            {props.displayStatus === false  ? 
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
