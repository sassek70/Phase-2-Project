import PlayerCard from "./PlayerCards"

const ActivesList = ({playerList, handleStatusChange, setDisplayStatus}) => {
    let activePlayers = playerList.filter((player) => (player.status === "Active"))

    const displayActivePlayers = activePlayers.map((player) => {
        const { id, name, team, image, yards, rtouchdowns, ptouchdowns, completions, favorited, status } = player
        return <PlayerCard key={id} id={id} name={name} 
        team={team} image={image} yards={yards} 
        rtouchdowns={rtouchdowns} ptouchdowns={ptouchdowns} 
        completions={completions} favorited={favorited} status={status} handleStatusChange={handleStatusChange}
        setDisplayStatus={setDisplayStatus}/>
    })
     
    

    return (
        <div className="card-container">
            {displayActivePlayers.length < 1 ? <h2>No Active Players</h2>: displayActivePlayers}
        </div>
    )
}

export default ActivesList;