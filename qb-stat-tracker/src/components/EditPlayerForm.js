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
        // if(event.target.type === "checkbox"){ 
        //     value = checked ? "Active" : "Inactive"
        // }
        setFormData((formData) => ({...formData, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onEditPlayer(formData)        
    }
    console.log(formData)


    return (
        <form onSubmit={handleSubmit}>
            <input value={formData.name} type="text" name="name" placeholder="Player's Name" onChange={handleChange}/>
            <input value={formData.team} type="text" name="team" placeholder="Player's Team" onChange={handleChange}/>
            <input value={formData.yards} type="number" name="yards" placeholder="Total Yards" onChange={handleChange}/>
            <input value={formData.rtouchdowns} type="number" name="rtouchdowns" placeholder="Passing Touchdowns" onChange={handleChange}/>
            <input value={formData.ptouchdowns} type="number" name="ptouchdowns" placeholder="Rushing Touchdowns" onChange={handleChange}/>
            <input value={formData.completions} type="number" name="completions" placeholder="Completions Touchdowns" onChange={handleChange}/>
            <input value={formData.image} type="text" name="image" placeholder="Player's image" onChange={handleChange}/>
            {/* <input type="checkbox" name="status" checked={formData.status === "Active"} onChange={handleChange}/> */}
            <select name="status" placeholder="Player Status" defaultValue={formData.status} onChange={handleChange}>
                <option value="Active" >Active</option>
                <option value="Inactive" >Inactive</option>
            </select>
            <button type="submit">Edit Player</button>
        </form>
        // <div>Hello {`${id}`}</div>
    )
}

export default EditForm