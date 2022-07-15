// import React, { useContext } from "react";
// import { NavLink } from "react-router-dom";
// import { AuthContext } from "../auth/AuthContext";

// const NavBarPrivado = () => {
//   const { logout } = useContext(AuthContext);
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
//           to="/blog"
//           className={({ isActive }) => (isActive ? "activo" : undefined)}
//         >
//           Blog Page
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/ucamper/35/jesus"
//           className={({ isActive }) => (isActive ? "activo" : undefined)}
//         >
//           Ucamper Page
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/alumnos"
//           className={({ isActive }) => (isActive ? "activo" : undefined)}
//         >
//           Alumnos Page
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/estados"
//           className={({ isActive }) => (isActive ? "activo" : undefined)}
//         >
//           Estados Page
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/efectos"
//           className={({ isActive }) => (isActive ? "activo" : undefined)}
//         >
//           Efectos Page
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/books"
//           className={({ isActive }) => (isActive ? "activo" : undefined)}
//         >
//           Books Page
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
//       <li>
//         <button onClick={logout}>Logout</button>
//       </li>
//     </ul>
//   );
// };

// export default NavBarPrivado;

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const NavBarPrivado = () => {
  const { logout } = useContext(AuthContext);
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
                Home
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
                About
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
                Contact
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
                Help
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/blog"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Blog
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/ucamper/35/jesus"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Ucamper
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/estados"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Estados
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/alumnos"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Alumnos
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

            <li className="nav-item">
              <NavLink
                to="/efectos"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Efectos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/books"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Libros
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/peliculas"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Peliculas
              </NavLink>
            </li>
            <li>
              <button className="nav-link" onClick={logout}>
                Logout
              </button>
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

export default NavBarPrivado;
