import React from "react";
import { StyledExperienceItem } from "./ExperienceItem.styled";

export const ExperienceItem = (props) => {
  const { data } = props;
  return (
    <StyledExperienceItem className="bg-site1 experience-item  border-[#b7bbc3] mt-50 mx-auto w-[90%] md:w-[48%] lg:w-[30%]  p-0">
      <div className="header ">
        <div className="image">
          <div className="wrapper ">
            <img src={data.logo} alt="logo" />
          </div>
        </div>
        <div className="text text-white ">
          <h2
            onMouseMove={(event) => {
              const x = event.nativeEvent.offsetX;
              const y = event.nativeEvent.offsetY;
              const centerX = event.target.clientWidth / 2;
              const centerY = event.target.clientHeight / 2;
              const deltaX = centerX - x;
              const deltaY = centerY - y;
              event.target.style.transform = `perspective(1000px) rotateX(${
                deltaY / 105
              }deg) rotateY(${deltaX / 105}deg) translateZ(20px);`;
              event.target.style.transitionDuration = "0.3s";
              event.target.style.transform += "translateZ(90px)";
              event.target.style.textShadow = `${x}px ${y}px 0 rgb(255,255,255), ${
                x * -1
              }px ${y}px 0 rgb(255,200,255), ${y}px ${
                x * -1
              }px 0 rgb(255,75,155), ${y}px ${x}px 0 rgb(45,125,55)`;
            }}
            onMouseLeave={(event) => {
              event.target.style.transform = "none";
              event.target.style.textShadow = "none";
            }}
          >
            {data.name}
          </h2>
          <h3 className="text-white position">{data.title}</h3>
        </div>
      </div>
      <div className="date flex gap-2 flex-wrap p-2 border-y text-white border-[#ABB2BF]">
        {data.joined} - {data.end}
      </div>
      <p className=" text-white">{data.bio}</p>
    </StyledExperienceItem>
  );
};
