import { useState } from "react"
import { Link } from "react-router-dom"

const playerUrl = `http://localhost:4000/quarterbacks/`

const PlayerCard = ({id, name, team, image, yards, rtouchdowns, ptouchdowns, completions, favorited, status, handleFavoriteChange}) => {
    const [isFavorited, setIsFavorited] = useState(favorited)
    const [showDetails, setShowDetails] = useState(false)

    const toggleFavorite = () => {
        setIsFavorited((isFavorited) => !isFavorited)
        persistFavoriteToggle()
        
    }


    const persistFavoriteToggle = () => {
        // console.log(isFavorited)
        fetch(playerUrl + `${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
                body: JSON.stringify({favorited: !isFavorited})
      })
      .then(res => res.json())
      .then((updatedPlayer) => {
        console.log(updatedPlayer)
        setIsFavorited(updatedPlayer.favorited)
        handleFavoriteChange(updatedPlayer)
        })
    }

    const showStats = () =>{
        setShowDetails(!showDetails)
    }



    return (
        <>
            <img src={image} alt={name} onClick={showStats}/>
            <div>
                {showDetails ? 
                <>
                <p>Total yards: {yards}</p>
                <p>Rushing Touchdowns: {rtouchdowns}</p>
                <p>Passing Touchdowns: {ptouchdowns}</p>
                <p>Completions: {completions}</p>
                <p>Status: {status}</p>
                {isFavorited ? 
                    <button onClick={toggleFavorite}>Remove from Favorites</button>
                    :
                    <button onClick={toggleFavorite}>Add to Favorites</button>
                }
                <Link to={`/player/${id}/EditForm`}>Edit Player Stats</Link>
                </>
                :
                <>
                <h1>{name}</h1>
                <p>{team}</p>
                </>
            }
            </div>
        </>
    )
}

export default PlayerCard

