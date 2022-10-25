import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const EditForm = ({onEditPlayer}) => {
    const { id } = useParams()
    const [formData, setFormData] = useState({
        id: id,
        name: "",
        team: "",
        yards: 0,
        rtouchdowns:0,
        ptouchdowns:0,
        completions:0,
        image:"",
        favorited: false
    })

    // populates form with player's stats
    useEffect(() => {
    fetch(`http://localhost:4000/quarterbacks/${id}`)
    .then(res => res.json())
    .then(playerInfo => {
        setFormData(playerInfo)
    })
},[])


    
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((formData) => ({...formData, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onEditPlayer(formData)        
    }



    return (
        <form onSubmit={handleSubmit}>
            <input value={formData.name} type="text" name="name" placeholder="Player's Name" onChange={handleChange}/>
            <input value={formData.team} type="text" name="team" placeholder="Player's Team" onChange={handleChange}/>
            <input value={formData.yards} type="number" name="yards" placeholder="Total Yards" onChange={handleChange}/>
            <input value={formData.rtouchdowns} type="number" name="rtouchdowns" placeholder="Passing Touchdowns" onChange={handleChange}/>
            <input value={formData.ptouchdowns} type="number" name="ptouchdowns" placeholder="Rushing Touchdowns" onChange={handleChange}/>
            <input value={formData.completions} type="number" name="completions" placeholder="Completions Touchdowns" onChange={handleChange}/>
            <input value={formData.image} type="text" name="image" placeholder="Player's image" onChange={handleChange}/>
            <button>Edit Player</button>
        </form>
        // <div>Hello {`${id}`}</div>
    )
}

export default EditForm