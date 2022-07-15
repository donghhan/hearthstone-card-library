import React from "react";
import "../../styles/navbar.scss";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  let activeClassName = "active";

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="home"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Expansions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="home"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Cards
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
