import React from "react";
import NewsHero from "../components/news/NewsHero.tsx";
import Header from "../components/common/Header.tsx";
import SignUp from "../components/common/SignUp.tsx";
import Footer from "../components/common/Footer.tsx";

const News = () => {
  return (
    <>
      <Header />
      <NewsHero />
      <SignUp />
      <Footer />
    </>
  );
};

export default News;
