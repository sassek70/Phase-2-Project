import { useState } from "react"
import { Link } from "react-router-dom"

const playerUrl = `http://localhost:4000/quarterbacks/`

const PlayerCard = ({id, name, team, image, yards, rtouchdowns, ptouchdowns, completions, favorited, handleFavoriteChange}) => {
    const [isFavorited, setIsFavorited] = useState(favorited)

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




    return (
        <>
            <img src={image} alt={name}/>
            <div>
                <h1>{name}</h1>
                <p>{team}</p>
                <p>Total yards: {yards}</p>
                <p>Rushing Touchdowns: {rtouchdowns}</p>
                <p>Passing Touchdowns: {ptouchdowns}</p>
                <p>Completions: {completions}</p>
                {isFavorited ? 
                    <button onClick={toggleFavorite}>Remove from Favorites</button>
                    :
                    <button onClick={toggleFavorite}>Add to Favorites</button>
                }
                <Link to={`/player/${id}/EditForm`}>Edit Player Stats</Link>
            </div>
        </>
    )
}

export default PlayerCard



{/* <EditForm id={id} name={name} team={team} image={image} yards={yards} rtouchdowns={rtouchdowns} ptouchdowns={ptouchdowns} completions={completions} favorited={favorited}/> */}