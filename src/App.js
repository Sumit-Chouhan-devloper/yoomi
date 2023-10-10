import React, { useEffect } from "react";
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
  //  useEffect(() => {
  //    window.addEventListener("load", () => {
       AOS.init({
         duration: 800,
         once: true,
       });
  //    });
  //  }, []);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     const element = document.querySelector(".your-element"); // Replace with your element selector
  //     if (element) {
  //       element.classList.add("animate__animated", "animate__fadeIn"); // Add your desired animate.css class
  //     }
  //   });
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.HOME} element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
