import React from "react";
import Footer from "../components/homepage/Footer.tsx";
import Header from "../components/homepage/Header.tsx";
import TreakingRemote from "../components/homepage/TreakingRemote.tsx";
import ReportingAnylats from "../components/homepage/ReportingAnylats.tsx";
import TrackingFeedback from "../components/homepage/TreakingFeedback.tsx";

const Main = () => {
  return (
    <>
      <div className=" overflow-hidden">
        {" "}
        <Header />
        <TreakingRemote />
        <ReportingAnylats />
        <TrackingFeedback />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Main;
