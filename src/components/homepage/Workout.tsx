import React from 'react'
import { Images } from "../../images.js";

const Workout = () => {
  return (
    <>
      {/* <div className="w-[1052px] h-[583px] rounded-[29px] bg-white shadow-lg shadow-[0px_2.92154px_65.73466px_0px_rgba(0, 0, 0, 0.06);] border-solid border-[0.73px] border-[#E8E7E7] py-5 m-auto">
        <div>

        </div>
        <img src={Images.workoutChatImg} alt="workout-chat-img" className='w-[318px] text-end' />
      </div> */}
      <div className="relative mt-[-40px] sm:mt-[-100px] min-[1025px]:mt-[-160px] min-[1600px]:mt-[-220px]">
        <img src={Images.workoutIcon} alt="workout-img" className="mx-auto" />
      </div>
    </>
  );
}

export default Workout