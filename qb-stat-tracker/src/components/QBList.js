import PlayerCard from "./PlayerCards"

const QBList = ({playerList}) => {

    const displayPlayers = playerList.map((player) => {
        const { id, name, team, image, yards, rtouchdown, ptouchdown, completions, favorited } = player
        return <PlayerCard id={id} name={name} team={team} image={image} yards={yards} rtouchdown={rtouchdown} ptouchdown={ptouchdown} completions={completions} favorited={favorited}/>
    })

    return(
        <>
            {displayPlayers}
        </>
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