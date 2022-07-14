// import React from "react";
// import { NavLink } from "react-router-dom";

// const NavBarPublico = () => {
//   return (
//     <ul>
//       <li>
//         <NavLink
//           to="/"
//           className={({ isActive }) => (isActive ? "activo" : undefined)}
//         >
//           Home Page
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/about"
//           className={({ isActive }) => (isActive ? "activo" : undefined)}
//         >
//           About Page
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/contact"
//           className={({ isActive }) => (isActive ? "activo" : undefined)}
//         >
//           Contact Page
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/help"
//           className={({ isActive }) => (isActive ? "activo" : undefined)}
//         >
//           Help Page
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/login"
//           className={({ isActive }) => (isActive ? "activo" : undefined)}
//         >
//           Login
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/posts"
//           className={({ isActive }) => (isActive ? "activo" : undefined)}
//         >
//           Posts Page
//         </NavLink>
//       </li>
//     </ul>
//   );
// };

// export default NavBarPublico;

import React from "react";
import { NavLink } from "react-router-dom";

const NavBarPublico = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home Page
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About Page
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Contact Page
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/help"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Help Page
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/posts"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Posts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Login
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarPublico;
