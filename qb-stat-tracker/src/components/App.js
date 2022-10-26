import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header";
import NewQbForm from "./NewQBForm";
import QBList from "./QBList";
import EditPlayerForm from "./EditPlayerForm"
import FavoritesList from "./FavoritesList";

const playerUrl = `http://localhost:4000/quarterbacks/`


function App() {
  const [playerList, setPlayerList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [searchValue, setSearchValue] = useState(true)
  
  
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
    .then((updatedList) => updatePlayerList(updatedList))
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
      favorited: editedPlayer.favorited
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




  return (
    <div>
      <Header changePageUrl={changePageUrl} changeSearch = {changeSearch} changeSearchValue = {changeSearchValue} searchValue = {searchValue}/>
        <Routes>
          <Route path="/" element={<QBList playerList={filteredPlayers} onFormSubmit={onFormSubmit} handleFavoriteChange={handleFavoriteChange}/>}/>
          <Route path="/form" element={<NewQbForm onFormSubmit={onFormSubmit} />}/>
          <Route path="/player/:id/EditForm" element={<EditPlayerForm onEditPlayer={onEditPlayer}/>}/>
          <Route path="/favorites" element={<FavoritesList playerList={filteredPlayers} handleFavoriteChange={handleFavoriteChange}/>}/>
        </Routes>
    </div>
  )
}

export default App;
