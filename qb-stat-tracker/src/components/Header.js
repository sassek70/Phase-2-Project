import Search from "./Search"
import { Link } from "react-router-dom"
import React from "react"
import Sort from "./Sort"

const Header = (props) => {

    const handleLinkClick =(e) => {
        e.preventDefault()
        props.changePageUrl(e.target.pathname)
    }

    return (
        <>
            <nav>
                <Link to="/" onClick={handleLinkClick}>Home</Link>
                <Link to="/form" onClick={handleLinkClick}>New Player Form</Link>
            </nav>

                <Search changeSearch ={props.changeSearch}
                changeSearchValue = {props.changeSearchValue}
                searchValue = {props.searchValue} />
                <Sort changeSortBy = {props.changeSortBy}/>
        </>
    )
}

export default Header
