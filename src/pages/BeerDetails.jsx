import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { JellyTriangle } from "@uiball/loaders";
function BeerDetails() {
    const[beerDetails, setBeerDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by } = beerDetails
    const params = useParams()
    //console.log(params.beerId);
    const getData = async () => {
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`)
            setBeerDetails(response.data)
            //console.log(response.data);
            setIsLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(()=> {
        getData()
    },[params.beerId])
  return (
    <div>
        { isLoading === true ? (
        <JellyTriangle size={60} speed={1.75} color="black" />
      ) : (<div>
        <img src={image_url} alt="beer" width="50em" />
        <h2>{name}</h2>
        <h6>{tagline}</h6>
        <h3>{attenuation_level}</h3>
        <p>{first_brewed}</p>
        <p>{description}</p>
        <p>{contributed_by}</p>
    </div>)}
    </div>
    
  )
}

export default BeerDetails