import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            RMAD DEMO WEB APP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/about"} className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/contact"} className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link">More</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

// Previous version with props
// import React from "react";

// export default function Navbar(props) {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-light">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             {props.text}
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNavAltMarkup"
//             aria-controls="navbarNavAltMarkup"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//             <div className="navbar-nav">
//               <a className="nav-link active" aria-current="page" href="#">
//                 Home
//               </a>
//               <a className="nav-link" href="#">
//                 About
//               </a>
//               <a className="nav-link" href="#">
//                 More
//               </a>
//               <a className="nav-link" href="#">
//                 Contact
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }
