import React from "react";
import Footer from "../components/homepage/Footer.tsx";
import Header from "../components/homepage/Header.tsx";
import TreakingRemote from "../components/homepage/TreakingRemote.tsx";
import ReportingAnylats from "../components/homepage/ReportingAnylats.tsx";
import TrackingFeedback from "../components/homepage/TreakingFeedback.tsx";
import Feature from "../components/homepage/Feature.tsx";

const Main = () => {
  return (
    <>
      <Header />
      <Feature/>
      <TreakingRemote />
      <ReportingAnylats />
      <TrackingFeedback />
      {/* <Footer /> */}
    </>
  );
};

export default Main;
