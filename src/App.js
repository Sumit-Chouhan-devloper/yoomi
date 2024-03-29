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
import ContactUs from "./view/ContactUs.tsx";
import About from "./view/About.tsx";
import News from "./view/News.tsx";
import NewsDetails from "./view/NewsDetails";
import "react-phone-input-2/lib/bootstrap.css";
import BackToTop from "./components/common/BackToTopButton";
function App() {
  AOS.init({
    duration: 800,
    once: true,
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={routes.HOME} element={<Main />} />
          <Route path={"/contact-us"} element={<ContactUs />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/news"} element={<News />} />
          <Route path={"/news-details/:id"} element={<NewsDetails />} />
        </Routes>
      </BrowserRouter>
      <BackToTop />
    </>
  );
}

export default App;
