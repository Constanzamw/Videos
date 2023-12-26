// import { Link } from "react-router-dom"
// import "./Nav.css"

// const Navbar = () => {
//   return (
//     <div className="container">
     
//       <ul className="nav justify-content-center">
//         <li >
//           <Link className="link" to="/">Videos</Link>
//         </li>
//         <li>
//           <Link className="link" to="/new-video">Upload Video</Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Navbar;

import { NavLink } from "react-router-dom";
import "./Nav.css";

const Navbar = () => {
  return (
    <div className="container">
      <ul className="nav justify-content-center">
        <li>
          <NavLink className="link"  to="/" >
            Videos
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/new-video">
            Upload Video
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

