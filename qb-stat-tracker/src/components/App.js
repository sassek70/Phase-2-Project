import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import NewQbForm from "./NewQBForm";
import QBList from "./QBList";

const playerUrl = `http://localhost:4000/quarterbacks`


function App() {
  const [playerList, setPlayerList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [searchValue, setSearchValue] = useState(true)
  const [page, setPage] = useState("/")

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

  useEffect (() => {
    fetch(playerUrl)
    .then(res => res.json())
    .then((playerArray) => setPlayerList(playerArray))

  },[])


  function changeSearch(text) {
    setSearchTerm(text)
  }
  function changeSearchValue() {
    setSearchValue(!searchValue)
  }
  const filteredPlayersByName = playerList.filter(player => player.name.toLowerCase().includes(searchTerm.toLowerCase()))
  const filteredPlayersByTeam = playerList.filter(player => player.team.toLowerCase().includes(searchTerm.toLowerCase()))
  
  return (
    <div>
      <Header changeSearch = {changeSearch} changeSearchValue = {changeSearchValue} searchValue = {searchValue}/>
        <Routes>
          <Route exact path="/" element={<QBList playerList={searchValue ? filteredPlayersByName : filteredPlayersByTeam} onFormSubmit={onFormSubmit}/>}/>
          <Route path="/form" element={<NewQbForm path="/form" onFormSubmit={onFormSubmit} />}/>
        </Routes>
    </div>
  )
}

export default App;
