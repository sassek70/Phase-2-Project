import { Link } from "react-router-dom"

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
                <Link to={`/player/${id}/EditForm`}>Edit Player Stats</Link>
            </div>
        </>
    )
}

export default PlayerCard



{/* <EditForm id={id} name={name} team={team} image={image} yards={yards} rtouchdowns={rtouchdowns} ptouchdowns={ptouchdowns} completions={completions} favorited={favorited}/> */}