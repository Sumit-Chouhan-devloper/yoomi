import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import NewsHero from "../components/news/NewsHero";
import NewsStart from "../components/news/NewsStart";

const News = () => {
  return (
    <>
      <Header />
      <NewsHero />
      <NewsStart />
      <Footer />
    </>
  );
};

export default News;
