import Search from "./Search"
import { Link } from "react-router-dom"
import React from "react"


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
                <Link to="/favorites" onClick={handleLinkClick}>Favrites List</Link>
            </nav>

                <Search changeSearch ={props.changeSearch}
                changeSearchValue = {props.changeSearchValue}
                searchValue = {props.searchValue} />
        </>
    )
}

export default Header
