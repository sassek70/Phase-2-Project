

const PlayerCard = ({id, name, team, image, yards, rtouchdown, ptouchdown, completions, favorited}) => {
    return (
        <>
            <img src={image} alt={name}/>
            <div>
                <h1>{name}</h1>
                <p>{team}</p>
                <p>Total yards: {yards}</p>
                <p>Passing Touchdowns: {rtouchdown}</p>
                <p>Passing Touchdowns: {ptouchdown}</p>
                <p>Completions: {completions}</p>
                {true ? 
                    <button>Add to Favorites</button>
                    :
                    <button>Remove from Favorites</button>
                }
            </div>
        </>
    )
}

export default PlayerCard
