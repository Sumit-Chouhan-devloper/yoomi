import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { routes } from "./enums";
import Main from "./view/Main.tsx";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    window.onload = () => {
      AOS.init({
        duration: 800,
        once: true,
      });
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.HOME} element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
