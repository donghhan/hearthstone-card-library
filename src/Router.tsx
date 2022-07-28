import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ISlideConfig, PageSlides, SlideParallaxType } from "react-page-slides";
import { Path } from "./utils/path";
// Pages
import HomePage from "./pages/HomePage";
import SetPage from "./pages/SetPage";
import CardPage from "./pages/CardPage";
import ClassPage from "./pages/ClassPage";
import CardBackPage from "./pages/CardBackPage";
// Components
import Navbar from "./components/navbar/Navbar";

export default function AppRouter() {
  const location = useLocation();
  const slides: ISlideConfig[] = [
    {
      content: <HomePage />,
      style: {
        backgroundImage: 'url("src/image/background1.jpg")',
      },
    },
    {
      content: <SetPage />,
      style: {
        backgroundImage: 'url("public/photo/photo_2.jpg")',
      },
    },
    {
      content: <CardPage />,
      style: {
        backgroundImage: 'url("public/photo/photo_2.jpg")',
      },
    },
    {
      content: <ClassPage />,
      style: {
        backgroundImage: 'url("public/photo/photo_2.jpg")',
      },
    },
    {
      content: <CardBackPage />,
      style: {
        backgroundImage: 'url("public/photo/photo_2.jpg")',
      },
    },
  ];

  return (
    <>
      {/* <Navbar /> */}
      <Routes location={location} key={location.pathname}>
        <Route path={Path.Home} element={<HomePage />} />
        <Route path={Path.Expansion} element={<SetPage />} />
        <Route path={Path.Cards} element={<CardPage />} />
        <Route path={Path.Cards} element={<CardBackPage />} />
      </Routes>
      <PageSlides
        enableAutoScroll={true}
        transitionSpeed={1000}
        slides={slides}
        parallax={{
          offset: 0.6,
          type: SlideParallaxType.reveal,
        }}
      />
    </>
  );
}
