import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import NewsHero from "../components/news/NewsHero";
import NewsStart from "../components/news/NewsStart";
import SignUp from "../components/common/SignUp";

const News = () => {
  return (
    <>
      <Header />
      <NewsHero />
      <NewsStart />
      <SignUp/>
      <Footer />
    </>
  );
};

export default News;
