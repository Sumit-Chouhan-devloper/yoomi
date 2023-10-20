import React from "react";
import Header from "../components/common/Header";
import MainNews from "../components/news/MainNews";
import Footer from "../components/common/Footer";
import NewsHero from "../components/news/NewsHero";

const NewsDetails = () => {
  return (
    <>
      <Header />
      <NewsHero />
      <MainNews />
      <Footer />
    </>
  );
};

export default NewsDetails;
