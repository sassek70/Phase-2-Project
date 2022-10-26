import PlayerCard from "./PlayerCards"



const FavoritesList = ({playerList, handleFavoriteChange}) => {

    let favoritePlayers = playerList.filter((player) => (player.favorited === true)) 
    
    const displayFavoritePlayers = favoritePlayers.map((player) => {
        const { id, name, team, image, yards, rtouchdowns, ptouchdowns, completions, favorited, status } = player
        return <PlayerCard key={id} id={id} name={name} 
        team={team} image={image} yards={yards} 
        rtouchdowns={rtouchdowns} ptouchdowns={ptouchdowns} 
        completions={completions} favorited={favorited} handleFavoriteChange={handleFavoriteChange}
        status = {status}/>
    })
     
    

    return (
        <div>
            {displayFavoritePlayers.length < 1 ? <h2>No Favorite Players</h2>: displayFavoritePlayers}
        </div>
    )
}

export default FavoritesList