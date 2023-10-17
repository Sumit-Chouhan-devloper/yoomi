import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { routes } from "./enums";
import Main from "./view/Main.tsx";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";

function App() {
  AOS.init({
    duration: 800,
    once: true,
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.HOME} element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
