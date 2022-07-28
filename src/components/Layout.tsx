import React from "react";
// Style
import "../styles/layout.scss";

interface ILayout {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  return <main>{children}</main>;
}
