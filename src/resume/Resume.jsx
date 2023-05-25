import React, { useState } from "react";

import me_removebg from "../assets/me-removebg.png";
import Achievement from "./Achievement";

const Resume = () => {
  const [achievementData, setAchievementData] = useState(true);

  return (
    <section
      id="resume"
      className="w-full  bg-mysecondcolor px-10 py-0 border-b-[1px] bg-site1 bg-opacity-30 shadow-xl rounded-3xl backdrop-filter backdrop-blur-lg"
    >
      <div className="flex justify-center items-center">
        <img className=" rounded-full h-20" src={me_removebg} />
      </div>

      <div className=" flex justify-center items-center text-center">
      <div className="border-b border-gray-500 w-64"></div>
      <h3 className="  text-white text-6xl uppercase font-light tracking-wide">
       My TimeLine
      </h3>
      <div className="border-b border-gray-500 w-64"></div>
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
         
        </ul>
      </div>

      {achievementData && <Achievement />}
    </section>
  );
};

export default Resume;
