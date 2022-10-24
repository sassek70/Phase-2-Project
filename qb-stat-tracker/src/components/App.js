import { useEffect, useState } from "react";
import Header from "./Header";
import QBList from "./QBList";

const playerUrl = `http://localhost:4000/quarterbacks`


function App() {
  const [playerList, setPlayerList] = useState([])

  useEffect (() => {
    fetch(playerUrl)
    .then(res => res.json())
    .then((playerArray) => setPlayerList(playerArray))

  },[])


  return (
    <div>
      <Header />
      <QBList playerList={playerList}/>
    </div>
  )


}

export default App;
