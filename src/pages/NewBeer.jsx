import axios from "axios";
import { useState } from "react";
import { JellyTriangle } from "@uiball/loaders";
import { useNavigate } from "react-router-dom";

function NewBeer() {

  const navigate = useNavigate()

    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [descrption, setDescription] = useState("")
    const [first_brewed, setFirst_brewed] = useState("")
    const [brewer_tips, setBrewer_tips] = useState("")
    const [attenuation_level, setAttenuation_level] = useState(0)
    const [contributed_by, setContributed_by] = useState("")

    const [ isLoading, setIsLoading ] = useState(true)

    const handleName = (e) => setName(e.target.value)
    const handleTagline = (e) => setTagline(e.target.value)
    const handleDescription = (e) => setDescription(e.target.value)
    const handleFirst_brewed = (e) => setFirst_brewed(e.target.value)
    const handleBrewer_tips = (e) => setBrewer_tips(e.target.value)
    const handleAttenuation_level = (e) => setAttenuation_level(e.target.value)
    const handleContributed_by = (e) => setContributed_by(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {
                name,
                tagline,
                descrption,
                first_brewed,
                brewer_tips,
                attenuation_level,
                contributed_by
            })
            navigate("/beers")
            setIsLoading(false)
        } catch (err) {
            console.log(err);
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          onChange={handleName}
          value={name}
        />

        <br />

        <label htmlFor="tagline">Tagline</label>
        <input
          type="text"
          name="tagline"
          onChange={handleTagline}
          value={tagline}
        />

        <br />  

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          onChange={handleDescription}
          value={descrption}
        />

        <br />

        <label htmlFor="first-brewed">First Brewed</label>
        <input
          type="text"
          name="first-brewed"
          onChange={handleFirst_brewed}
          value={first_brewed}
        />

        <br />

        <label htmlFor="brewer-tips">Brewer Tips</label>
        <input
          type="text"
          name="brewer-tips"
          onChange={handleBrewer_tips}
          value={brewer_tips}
        />

        <br />

        <label htmlFor="attenuation-level">Attenuation Level</label>
        <input
          type="number"
          name="attenuation-level"
          onChange={handleAttenuation_level}
          value={attenuation_level}
        />

        <br />

        <label htmlFor="contributed-by">Contributed By</label>
        <input
          type="text"
          name="contributed-by"
          onChange={handleContributed_by}
          value={contributed_by}
        />

        <br />

        <button type="submit">Add</button>

       {/* {isLoading === true && <JellyTriangle size={60} speed={1.75} color="black" />} */}
      </form>
    </div>
    
  )
}

export default NewBeer