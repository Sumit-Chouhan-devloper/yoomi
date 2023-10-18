import React from "react";
import NewsHero from "../components/news/NewsHero";
import Header from "../components/common/Header";

import MainNews from "../components/news/MainNews";
import Footer from "../components/common/Footer";

const News = () => {
  return (
    <>
      <Header />
      <NewsHero />
      <MainNews />
      <Footer />
    </>
  );
};

export default News;
