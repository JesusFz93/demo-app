import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "activo" : undefined)}
        >
          Home Page
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "activo" : undefined)}
        >
          About Page
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "activo" : undefined)}
        >
          Contact Page
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/help"
          className={({ isActive }) => (isActive ? "activo" : undefined)}
        >
          Help Page
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;