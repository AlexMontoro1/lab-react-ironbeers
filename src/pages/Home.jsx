import { Link } from "react-router-dom"
import beersImage from "../assets/beers.png";
import randomBeerImage from "../assets/random-beer.png";
import newBeerImage from "../assets/new-beer.png";


function Home() {
  return (
    <div>
        <Link to="/beers"><img src={beersImage} alt="beer" /></Link>
        <h3>All Beers</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quae eos maiores similique, quas, nisi tempore eaque ea cum, nesciunt voluptatibus recusandae omnis aut! Repellat error necessitatibus illo ipsum nobis.</p>
        <Link to="/random-beer"><img src={randomBeerImage} alt="random-beer" /></Link>
        <h3>Random Beer</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis a magnam, ea id ipsum accusantium tenetur, aliquam velit aut, expedita sequi esse reprehenderit repudiandae fuga amet? Tempore maxime laudantium facilis?</p>
        <Link to="/new-beer"><img src={newBeerImage} alt="new-beer" /></Link>
        <h3>New Beer</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequuntur vitae dolores. Deserunt quis voluptatum, iste delectus quos, nostrum optio perferendis corporis ipsa ea sed illum et modi magni placeat!</p>
    </div>
  )
}

export default Home