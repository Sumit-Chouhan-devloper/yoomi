import React from "react";
import NewsHero from "../components/news/NewsHero";
import Header from "../components/common/Header";
// import SignUp from "../components/common/SignUp";
// import Footer from "../components/common/Footer";
import MainNews from "../components/news/MainNews";

const News = () => {
  return (
    <>
      <Header />
      <NewsHero />
      <MainNews />
      {/* <SignUp /> */}
      {/* <Footer /> */}
    </>
  );
};

export default News;
