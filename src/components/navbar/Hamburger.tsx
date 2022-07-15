import React from "react";
import { motion } from "framer-motion";
import "../../styles/navbar/hamburger.scss";

interface IHamburgerButton {
  onClick: () => void;
  navToggle: boolean;
}

export default function HamburgerButton({
  onClick,
  navToggle,
}: IHamburgerButton) {
  return (
    <div className="hamburger">
      <div className={`line-left ${navToggle === true ? `open` : null}`}></div>
      <div className="line-right"></div>
    </div>
  );
}
