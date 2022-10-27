
import PlayerCard from "./PlayerCards"

const QBList = ({playerList, handleFavoriteChange}) => {

    const displayPlayers = playerList.map((player) => {
        const { id, name, team, image, yards, rtouchdowns, ptouchdowns, completions, favorited, status } = player
        return <PlayerCard key={id} id={id} name={name} team={team} image={image} yards={yards} rtouchdowns={rtouchdowns} ptouchdowns={ptouchdowns} completions={completions} favorited={favorited} status={status} handleFavoriteChange={handleFavoriteChange}/>
    })

    return(
        <div className="card-container">
            {displayPlayers}
        </div>
    )
}

export default QBList






// "id":1 ,
// "name": "Josh Allen",
// "team": "Buffalo Bills",
// "yards": 2237,
// "rtouchdowns":2,
// "ptouchdowns":17,
// "completions":160,
// "image":"",
// "favorited": false