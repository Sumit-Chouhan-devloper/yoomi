import React from "react";
import Header from "../components/common/Header";
import SignUp from "../components/common/SignUp";
import Footer from "../components/common/Footer";
import NewsHero from "../components/news/NewsHero";
import NewsStart from "../components/news/NewsStart";
// import SignUp from "../components/common/SignUp";
// import Footer from "../components/common/Footer";
// import MainNews from "../components/news/MainNews";
const News = () => {
  return (
    <>
      <Header />
      <NewsHero />
      <NewsStart />
      <SignUp />
      <Footer />
      {/* <MainNews /> */}
      {/* <SignUp /> */}
      {/* <Footer /> */}
    </>
  );
};

export default News;
