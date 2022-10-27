
import PlayerCard from "./PlayerCards"

const QBList = ({playerList, handleFavoriteChange, setDisplayStatus}) => {

    const displayPlayers = playerList.map((player) => {
        const { id, name, team, image, yards, rtouchdowns, ptouchdowns, completions, favorited, status } = player
        return <PlayerCard key={id} id={id} name={name} team={team} image={image} yards={yards} rtouchdowns={rtouchdowns} 
        ptouchdowns={ptouchdowns} completions={completions} favorited={favorited} status={status} handleFavoriteChange={handleFavoriteChange}
        setDisplayStatus={setDisplayStatus}/>
    })

    return(
        <div className="card-container">
            {displayPlayers}
        </div>
    )
}

export default QBList

