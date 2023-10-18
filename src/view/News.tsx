import React from "react";
import NewsHero from "../components/news/NewsHero";
import Header from "../components/common/Header";
import SignUp from "../components/common/SignUp";
import Footer from "../components/common/Footer";

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
