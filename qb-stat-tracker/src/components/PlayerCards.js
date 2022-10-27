import { useState } from "react"
import { NavLink } from "react-router-dom"

const playerUrl = `http://localhost:4000/quarterbacks/`

const PlayerCard = ({id, name, team, image, yards, rtouchdowns, ptouchdowns, completions, favorited, status, handleFavoriteChange, setDisplayStatus}) => {
    const [isFavorited, setIsFavorited] = useState(favorited)
    const [showDetails, setShowDetails] = useState(false)

    const toggleFavorite = (e) => {
        e.stopPropagation()
        setIsFavorited((isFavorited) => !isFavorited)
        persistFavoriteToggle()       
    }

    const hideSearchSort = () => {
        setDisplayStatus(false)
    }

    const persistFavoriteToggle = () => {
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

    const showStats = (e) =>{
        setShowDetails(!showDetails)
    }

    return (
        <div className="player-card" onClick={showStats}>
            <img src={image} alt={name} className="player-image"/>
            <div className="player-details">
                {showDetails ? 
                <>
                <p>Total yards: {yards}</p>
                <p>Rushing Touchdowns: {rtouchdowns}</p>
                <p>Passing Touchdowns: {ptouchdowns}</p>
                <p>Completions: {completions}</p>
                <p>Status: {status}</p>
                {isFavorited ? 
                    <button className="buttons" onClick={toggleFavorite}>Remove from Favorites</button>
                    :
                    <button className="buttons" onClick={toggleFavorite}>Add to Favorites</button>
                }
                <NavLink className="buttons" to={`/player/${id}/EditForm`} name="Edit Player" onClick={hideSearchSort}>Edit Player Stats</NavLink>
                </>
                :
                <>
                <h1>{name}</h1>
                <p>{team}</p>
                </>
            }
            </div>
        </div>
    )
}

export default PlayerCard

