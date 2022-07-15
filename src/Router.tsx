import React from "react";
import { Routes, Route } from "react-router-dom";
import { Path } from "./utils/path";
// Pages
import HomePage from "./pages/HomePage";
import ExpansionPage from "./pages/ExpansionPage";
import CardPage from "./pages/CardPage";
// Components
import Navbar from "./components/navbar/Navbar";

export default function AppRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={Path.Home} element={<HomePage />} />
        <Route path={Path.Expansion} element={<ExpansionPage />} />
        <Route path={Path.Cards} element={<CardPage />} />
      </Routes>
    </>
  );
}
