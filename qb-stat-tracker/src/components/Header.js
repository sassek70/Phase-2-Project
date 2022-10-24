import Search from "./Search"


const Header = (props) => {
    return (
            <Search changeSearch ={props.changeSearch}
            changeSearchValue = {props.changeSearchValue}
            searchValue = {props.searchValue} />
    )
}

export default Header
