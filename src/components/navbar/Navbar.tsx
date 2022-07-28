import React, { useState } from "react";
import { motion, useCycle } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Path } from "../../utils/path";
import { ISlideConfig, PageSlides, SlideParallaxType } from "react-page-slides";
// Style
import "../../styles/navbar/navbar.scss";
// Component
import NavItem from "./NavItem";

const NavItems = [
  { id: "0", navLinkText: "home", to: "/" },
  { id: "1", navLinkText: "sets", to: "/sets" },
  { id: "2", navLinkText: "cards", to: "/cards" },
  { id: "3", navLinkText: "classes", to: "/classes" },
  { id: "4", navLinkText: "backs", to: "/backs" },
];

export default function Navbar() {
  return (
    <nav>
      <ul>
        {NavItems.map((item) => (
          <NavItem id={item.id} navLinkText={item.navLinkText} to={item.to} />
        ))}
      </ul>
    </nav>
  );
}
