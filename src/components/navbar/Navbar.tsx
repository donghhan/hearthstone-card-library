import React, { useState } from "react";
import "../../styles/navbar/navbar.scss";
import { NavLink } from "react-router-dom";
import { Path } from "../../utils/path";
import HamburgerButton from "./Hamburger";

export default function Navbar() {
  let activeClassName = "active";

  const [navToggle, setNavToggle] = useState<boolean>(false);
  const handleNavToggle = () => {
    setNavToggle(!navToggle);
    console.log(navToggle);
  };

  return (
    <nav>
      <HamburgerButton onClick={handleNavToggle} navToggle={navToggle} />
      <ul>
        <li>
          <NavLink
            to={Path.Expansion}
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Expansions
          </NavLink>
        </li>
        <li>
          <NavLink
            to={Path.Cards}
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
