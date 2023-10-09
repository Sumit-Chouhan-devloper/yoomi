import React from "react";
import { Images } from "../../images.js";

const Workout = () => {
  return (
    <>
      <div className="relative mt-[-40px] sm:mt-[-100px] xl:mt-[-160px] 2xl:mt-[-200px]">
        <img src={Images.workoutIcon} alt="workout-img" className="mx-auto" />
      </div>
    </>
  );
};

export default Workout;
