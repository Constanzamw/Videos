import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <ul className="nav justify-content-center ">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Videos</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="/new-video">Upload Video</Link>
        </li>
       
      </ul>
    </div>
  )
}

export default Navbar
