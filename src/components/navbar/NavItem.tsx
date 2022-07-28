import React from "react";
import { NavLink } from "react-router-dom";

interface INavItem {
  id: string;
  navLinkText: string;
  to: string;
}

export default function NavItem({ id, navLinkText, to }: INavItem) {
  return (
    <li key={id}>
      <NavLink to={to}>{navLinkText}</NavLink>
    </li>
  );
}
