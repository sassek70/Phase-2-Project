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
        favorited: false,
        status: ""
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
        let { name, value, checked } = event.target
        if(event.target.type === "checkbox"){ 
            value = checked ? "Active" : "Inactive"
        }
        setFormData((formData) => ({...formData, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onEditPlayer(formData)        
    }
    console.log(formData)


    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                <h1>Edit {formData.name}'s Stats:</h1>
                <label className="input-label" htmlFor="name">Player's Name:</label>
                <input className="input" value={formData.name} type="text" name="name" placeholder="Player's Name" onChange={handleChange}/>

                <label className="input-label" htmlFor="team">Player's Team:</label>
                <input className="input" value={formData.team} type="text" name="team" placeholder="Player's Team" onChange={handleChange}/>

                <label className="input-label" htmlFor="yards">Total Yards:</label>
                <input className="input" value={formData.yards} type="number" name="yards" placeholder="Total Yards" onChange={handleChange}/>

                <label className="input-label" htmlFor="rtouchdowns">Rushing Touchdowns:</label>
                <input className="input" value={formData.rtouchdowns} type="number" name="rtouchdowns" placeholder="Passing Touchdowns" onChange={handleChange}/>

                <label className="input-label" htmlFor="ptouchdowns">Passing Touchdowns:</label>
                <input className="input" value={formData.ptouchdowns} type="number" name="ptouchdowns" placeholder="Rushing Touchdowns" onChange={handleChange}/>

                <label className="input-label" htmlFor="completions">Completions:</label>
                <input className="input" value={formData.completions} type="number" name="completions" placeholder="Completions Touchdowns" onChange={handleChange}/>

                <label className="input-label" htmlFor="image">Player's Photo:</label>
                <input className="input" value={formData.image} type="text" name="image" placeholder="Player's image" onChange={handleChange}/>

                <label className="input-label-checkbox" htmlFor="checkbox">Active:
                <input type="checkbox" name="status" checked={formData.status === "Active"} onChange={handleChange}/>
                </label>

                <button type="submit" className="form-submit-button">Edit Player</button>
            </form>
        </>
    )
}

export default EditForm