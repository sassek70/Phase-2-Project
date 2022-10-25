

const PlayerCard = ({id, name, team, image, yards, rtouchdowns, ptouchdowns, completions, favorited}) => {
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
                {true ? 
                    <button>Add to Favorites</button>
                    :
                    <button>Remove from Favorites</button>
                }
                {/* <button onClick={<Route path="/player/:id/EditForm" 
                element={<EditForm player={player.id}/>}
                />}>Edit Player Stats 
                </button> */}
            </div>
        </>
    )
}

export default PlayerCard
