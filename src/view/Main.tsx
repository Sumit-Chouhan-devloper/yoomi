import React from "react";
import Footer from "../components/homepage/Footer.tsx";
import Header from "../components/homepage/Header.tsx";
import TreakingRemote from "../components/homepage/TreakingRemote.tsx";
import ReportingAnylats from "../components/homepage/ReportingAnylats.tsx";
import TrackingFeedback from "../components/homepage/TreakingFeedback.tsx";
import Partners from "../components/homepage/Partners.tsx";
import Workout from "../components/homepage/Workout.tsx";

const Main = () => {
  return (
    <>
      <div className=" overflow-hidden">
        {" "}
        <Header />
        <Workout/>
        <TrackingFeedback />
        <ReportingAnylats />
        <TreakingRemote />
        <Partners/>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Main;
