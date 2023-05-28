import { Link } from "react-router-dom"
import headerImage from "../assets/header.png";

function Header() {
  return (
    <header>
        <Link to="/"><img src={headerImage} alt="header" /></Link>
    </header>
  )
}

export default Header