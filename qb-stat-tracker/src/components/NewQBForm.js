import { useState } from "react"



const NewQbForm = ({ onFormSubmit }) => {
    const [formData, setFormData] = useState({
        name: "",
        team: "",
        yards: 0,
        rtouchdowns:0,
        ptouchdowns:0,
        completions:0,
        image:"./images/stockplayer.jpg",
        favorited: false,
        Status: "Active"
    })



    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((formData) => ({...formData, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onFormSubmit(formData)        
    }

    console.log(formData)

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Player's Name" onChange={handleChange}/>
            <input type="text" name="team" placeholder="Player's Team" onChange={handleChange}/>
            <input type="number" name="yards" placeholder="Total Yards" onChange={handleChange}/>
            <input type="number" name="rtouchdowns" placeholder="Passing Touchdowns" onChange={handleChange}/>
            <input type="number" name="ptouchdowns" placeholder="Rushing Touchdowns" onChange={handleChange}/>
            <input type="number" name="completions" placeholder="Completions Touchdowns" onChange={handleChange}/>
            <input type="text" name="image" placeholder="Player's image" onChange={handleChange}/>
            <select name="Status" placeholder="Player Status" onChange={handleChange}>
                <option value="Set Status" selected disabled hidden>Select Status</option>
                <option value="Active" >Active</option>
                <option value="Inactive" >Inactive</option>
            </select>
            <button>Add Player</button>
        </form>
    )
}

export default NewQbForm