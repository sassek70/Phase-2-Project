import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header";
import NewQbForm from "./NewQBForm";
import QBList from "./QBList";
import EditPlayerForm from "./EditPlayerForm"
import FavoritesList from "./FavoritesList";
import ActivesList from "./ActivesList";

const playerUrl = `http://localhost:4000/quarterbacks/`


function App() {
  const [playerList, setPlayerList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [searchValue, setSearchValue] = useState(true)
  const [sort, setSort] = useState('None')  
  const [displayStatus, setDisplayStatus] = useState(null)
  
  
  const navigate = useNavigate()

  const updatePlayerList = (newPlayer) => {
    setPlayerList((playerList) => ([...playerList, newPlayer]))

  }
  
  const onFormSubmit = (newPlayer) => {
   
    fetch(playerUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newPlayer)
    })
    .then(res => res.json())
    .then((updatedList) => {
      updatePlayerList(updatedList)
      navigate('/')})
  }

  const updateList = () => {
    fetch(playerUrl)
    .then(res => res.json())
    .then((playerArray) => setPlayerList(playerArray))
  }

  useEffect (() => {
    updateList()
  },[])


  function changeSearch(text) {
    setSearchTerm(text)
  }
  function changeSearchValue() {
    setSearchValue(!searchValue)
  }
  const filteredPlayers = playerList.filter(player => player.name.toLowerCase().includes(searchTerm.toLowerCase()) || player.team.toLowerCase().includes(searchTerm.toLowerCase()))


  
function changeSortBy(newSortBy) {
  setSort(newSortBy)
}
 

// function makeSortedPlayers() {
//   if (searchValue = true) {
//     let sortedPlayers = filteredPlayersByName
//   if (searchValue = false) {
//    let sortedPlayers = filteredPlayersByTeam
//   }
// }
// }
function sortPlayers() {
  if (sort === 'Yards')
    return filteredPlayers.sort((player1, player2) => player2.yards - player1.yards)
  else if (sort === 'Rushing Touchdowns')
    return filteredPlayers.sort((player1, player2) => player2.rtouchdowns - player1.rtouchdowns)
  else if (sort === 'Passing Touchdowns')
    return filteredPlayers.sort((player1, player2) => player2.ptouchdowns - player1.ptouchdowns)
  else if (sort === 'Completions')
    return filteredPlayers.sort((player1, player2) => player2.completions - player1.completions)
  else
    return filteredPlayers
}   
  
  const changePageUrl = (newUrl) => {
    navigate(newUrl)
    }


  const onEditPlayer = (editedPlayer) => {
    console.log(editedPlayer.id)

    fetch(playerUrl + `${editedPlayer.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: editedPlayer.name,
      team: editedPlayer.team,
      yards: editedPlayer.yards,
      rtouchdowns:editedPlayer.rtouchdowns,
      ptouchdowns:editedPlayer.ptouchdowns,
      completions:editedPlayer.completions,
      image:editedPlayer.image,
      favorited: editedPlayer.favorited,
      status: editedPlayer.status
    })
  })
  .then(res => res.json())
  .then((updatedPlayer) => {
    console.log(updatedPlayer)
    updateList()
    navigate('/')})
}

 const handleFavoriteChange =(updatedPlayer)=>{
  const updatedList = playerList.map((player) => player.id === updatedPlayer.id? updatedPlayer: player)
  setPlayerList(updatedList)
 }

 const handleStatusChange=(updatedPlayer)=>{
  const updatedList = playerList.map((player => player.id === updatedPlayer.id? updatedPlayer: player))
  setPlayerList(updatedList)
}

console.log(displayStatus)

const handleLinkClick =(e) => {
    e.preventDefault()
    const { name, pathname } = e.target
    if(name === "home" || name === "Favorites List" || name === "Active List") {
        setDisplayStatus(true)
    } else {
        setDisplayStatus(false)
    }
    changePageUrl(pathname)        
}


  return (
    <div>
      <Header changePageUrl={changePageUrl} changeSearch = {changeSearch} changeSearchValue = {changeSearchValue} searchValue = {searchValue}
      changeSortBy = {changeSortBy} handleLinkClick={handleLinkClick} displayStatus={displayStatus}/>
        <Routes>
          <Route path="/" element={<QBList playerList={sortPlayers()} onFormSubmit={onFormSubmit} handleFavoriteChange={handleFavoriteChange} handleLinkClick={handleLinkClick} setDisplayStatus={setDisplayStatus}/>}/>
          <Route path="/form" element={<NewQbForm onFormSubmit={onFormSubmit} />}/>
          <Route path="/player/:id/EditForm" element={<EditPlayerForm onEditPlayer={onEditPlayer}/>}/>
          <Route path="/favorites" element={<FavoritesList playerList={filteredPlayers} handleFavoriteChange={handleFavoriteChange} setDisplayStatus={setDisplayStatus}/>}/>
          <Route path="/activelist" element={<ActivesList playerList={filteredPlayers} handleStatusChange={handleStatusChange} setDisplayStatus={setDisplayStatus} />}/>
        </Routes>
    </div>
  )
}

export default App;
