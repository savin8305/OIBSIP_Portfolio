import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  leetcode,
  frontend,
  backend,
  gfg,
  springboard,
  java,
} from "../../assets/index";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Project() {
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [selectedSlide, setSelectedSlide] = useState("slide-1");

  const handleSlideChange = (event) => {
    setSelectedSlide(event.target.id);
  };

  useEffect(() => {
    AOS.init({
      once: true,
      easing: "ease-out",
      duration: 500,
    });
  }, []);

  return (
    <div
      className="bg-mysecondcolor  section h-half over-hide"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="container-fluid h-half px-0 ml-20 mr-20">
        <div className="row ">
          <div className="iamrow col-lg-8 mx-auto my-auto">
            <div className="section text-center slider-height-padding">
              <input
                className="checkbox frst"
                type="radio"
                id="slide-1"
                name="slider"
                checked={selectedSlide === "slide-1"}
                onChange={handleSlideChange}
              />
              <label
                className="bg-cover w-full md:w-1/4 h-48 md:h-auto"
                style={{ backgroundImage: `url(${gfg})` }}
                htmlFor="slide-1"
              ></label>
              <input
                className="checkbox scnd"
                type="radio"
                id="slider-2"
                name="slider"
                checked={selectedSlide === "slider-2"}
                onChange={handleSlideChange}
              />
              <label
                className="bg-cover w-full md:w-1/4 h-48 md:h-auto"
                style={{ backgroundImage: `url(${leetcode})` }}
                htmlFor="slider-2"
              ></label>
              <input
                className="checkbox thrd"
                type="radio"
                id="slider-3"
                name="slider"
                checked={selectedSlide === "slider-3"}
                onChange={handleSlideChange}
              />
              <label
                className="bg-cover w-full md:w-1/4 h-48 md:h-auto"
                style={{ backgroundImage: `url(${java})` }}
                htmlFor="slider-3"
              ></label>
              <input
                className="checkbox foth"
                type="radio"
                id="slider-4"
                name="slider"
                checked={selectedSlide === "slider-4"}
                onChange={handleSlideChange}
              />
              <label
                className="bg-cover w-full md:w-1/4 h-48 md:h-auto"
                style={{ backgroundImage: `url(${backend})` }}
                htmlFor="slider-4"
              ></label>
              <input
                className="checkbox fifth"
                type="radio"
                id="slider-5"
                name="slider"
                checked={selectedSlide === "slider-5"}
                onChange={handleSlideChange}
              />
              <label
                className="bg-cover w-full md:w-1/4 h-48 md:h-auto"
                style={{ backgroundImage: `url(${frontend})` }}
                htmlFor="slider-5"
              ></label>
              <input
                className="checkbox sixth"
                type="radio"
                id="slider-6"
                name="slider"
                checked={selectedSlide === "slider-6"}
                onChange={handleSlideChange}
              />
              <label
                className="bg-cover w-full md:w-1/4 h-48 md:h-auto"
                style={{ backgroundImage: `url(${springboard})` }}
                htmlFor="slider-6"
              ></label>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                <li
                  className="border-l-6 rounded-tl-3xl rounded-full hover:transform hover:perspective(1000) hover:rotate-x-10 hover:rotate-y-10 hover:-translate-z-20 bg-cover"
                  style={{ backgroundImage: `url(${gfg})` }}
                >
                  <span className="text-center block py-2"></span>
                </li>
                <li
                  className="border-l-6 rounded-tl-3xl rounded-full hover:transform hover:perspective(1000) hover:rotate-x-10 hover:rotate-y-10 hover:-translate-z-20 bg-cover"
                  style={{ backgroundImage: `url(${leetcode})` }}
                >
                  <span className="text-centerblock py-2"></span>
                </li>
                <li
                  className="border-l-6 rounded-tl-3xl rounded-full hover:transform hover:perspective(1000) hover:rotate-x-10 hover:rotate-y-10 hover:-translate-z-20 bg-cover"
                  style={{ backgroundImage: ` url(${java})` }}
                >
                  <span className="text-center block py-2"></span>
                </li>
                <li
                  className="border-l-6 rounded-tl-3xl rounded-full hover:transform hover:perspective(1000) hover:rotate-x-10 hover:rotate-y-10 hover:-translate-z-20 bg-cover"
                  style={{ backgroundImage: ` url(${frontend})` }}
                >
                  <span className="text-center block py-2"></span>
                </li>
                <li
                  className="border-l-6 rounded-tl-3xl rounded-full hover:transform hover:perspective(1000) hover:rotate-x-10 hover:rotate-y-10 hover:-translate-z-20 bg-cover"
                  style={{ backgroundImage: `url(${backend}) ` }}
                >
                  <span className="text-center block py-2"></span>
                </li>
                <li
                  className="border-l-6 rounded-tl-3xl rounded-full hover:transform hover:perspective(1000) hover:rotate-x-10 hover:rotate-y-10 hover:-translate-z-20 bg-cover"
                  style={{ backgroundImage: `url(${springboard})` }}
                >
                  
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
