import { useEffect, useState } from "react";
import resume from "../../assets/Resumemain2.pdf";
import logo from "../../assets/me-removebg.png";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import "./Home.css";
import Resume from "../../resume/Resume";
import { AnimatedSpan, Name, Position, TextContainer } from "./Home.styled";
import Tech from "../Tech";
// import AboutSection from "../About/About";
import Contact from "../Contact/Contact";
import Project from "../Projects/Project";
import Navbar from "../Navbar/Navbar";
import { Experience } from "../../pages/Experience";
import * as ReactIcons from "react-icons/all";

function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedSection, setSelectedSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const homeSection = document.getElementById("home");
    const aboutSection = document.getElementById("about");
    const techSection = document.getElementById("tech");
    const projectSection = document.getElementById("project");
    const contactSection = document.getElementById("contact");

    const homeOffsetTop = homeSection.offsetTop;
    const aboutOffsetTop = aboutSection.offsetTop;
    const techOffsetTop = techSection.offsetTop;
    const projectOffsetTop = projectSection.offsetTop;
    const contactOffsetTop = contactSection.offsetTop;

    if (scrollPosition >= homeOffsetTop && scrollPosition < aboutOffsetTop) {
      setSelectedSection("home");
    } else if (
      scrollPosition >= aboutOffsetTop &&
      scrollPosition < techOffsetTop
    ) {
      setSelectedSection("about");
    } else if (
      scrollPosition >= techOffsetTop &&
      scrollPosition < projectOffsetTop
    ) {
      setSelectedSection("tech");
    } else if (
      scrollPosition >= projectOffsetTop &&
      scrollPosition < contactOffsetTop
    ) {
      setSelectedSection("project");
    } else {
      setSelectedSection("contact");
    }
  }, [scrollPosition]);

  const produceSpans = (name) => {
    return name.split("").map((letter, index) => (
      <AnimatedSpan
        index={index}
        letter={letter}
        aria-hidden="true"
        key={index}
      >
        {letter}
      </AnimatedSpan>
    ));
  };

  useEffect(() => {
    AOS.init({
      once: true,
      easing: "ease-out",
      duration: 500,
    });
  }, []);

  return (
    <>
      <Navbar selectedSection={selectedSection} />
      <div className="text-[#ABB2BF] bg-mysecondcolor top-0 flex flex-col ">
        <div
          className="lg:ml-40 my-element lg:mr-20  flex justify-center items-center flex-col"
          data-aos="fade-up"
          id="home"
        >
          <div className="px-5 max-w-[1560px] mx-auto min-h-screen pt-20 fflex flex-col items-center justify-between flex-wrap">
            <div className="px-5 max-w-[1560px] mx-auto min-h-screen flex items-center justify-between flex-wrap">
              <div className="w-10/12 sm:w-8/12 mx-auto">
                <TextContainer>
                  <Position>
                    <div className="text first text-5xl" aria-label="Akash!">
                      {produceSpans("Akash! vish is ")}
                    </div>
                    <div
                      className="text second text-5xl"
                      aria-label="Vishwakarma"
                    >
                      {produceSpans("Akash! vish is ")}
                    </div>
                  </Position>
                </TextContainer>
                <h1 className="font-semibold text-[52px] text-white">
                  <TextContainer>
                    <Position>
                      <div
                        className="text first text-5xl"
                        aria-label=" Mern Developer"
                      >
                        {produceSpans("Mern Developer")}
                      </div>
                      <div
                        className="text second text-5xl"
                        aria-label="Full Stack DEV"
                      >
                        {produceSpans("Full Stack DEV")}
                      </div>
                    </Position>
                  </TextContainer>
                </h1>
                <p className="text-[#ABB2BF] my-6 text-center md:text-left">
                  He merges tech and creativity to craft responsive websites.
                </p>
                <div className="flex justify-center  md:justify-start">
                  <div className="px-3">
                    {" "}
                    <a href={resume} target="_blank" rel="noopener noreferrer">
                      <button className="text-white  font-medium py-2 px-4 border duration-200 border-[#C778DD] hover:bg-[#C778DD33]">
                        Contact Me!!
                      </button>
                    </a>
                  </div>
                  <div className="px-3">
                    <a href={resume} target="_blank" rel="noopener noreferrer">
                      <button className="text-white font-medium py-2 px-4 border duration-200 border-[#C778DD] hover:bg-[#C778DD33]">
                        My Resume!!
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className=" ml-auto border-b-2 border-gray-400 w-96" ></div> */}
        <div className="pl-10 md:pl-20  pr-10 md:pr-20" id="about">
          Akash Vishwakarma is a certified full-stack developer with expertise
          in front-end and back-end development. With over a year of experience
          and certifications from Meta and Infosys in Java, Akash possesses the
          skills to make significant contributions to any project. He has
          completed multiple certification courses in SQL Foundation, JavaScript
          Foundation, and Git & GitHub via self-paced learning with
          GeeksForGeeks.
        </div>

        <div className="text-center  mt-4 mb-4 " id="tech">
          <span
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
            className="h-8 border border-l-pink-50 krishna p-2 w-10"
          >
            Working on Portfolio
          </span>
        </div>

        <div
          data-aos="zoom-in"
          className="mt-40 text-center text-5xl"
          id="project"
        >
          <div className="flex justify-center items-center text-center">
            <div class="border-b border-gray-500 w-64"></div>
            <h1 className="text-center text-5xl ">Teck Skill</h1>
            <div class="border-b border-gray-500 w-64"></div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="mt-40 mb-60"
          >
            <Tech />
            <div
              onMouseMove={(event) => {
                const x = event.nativeEvent.offsetX;
                const y = event.nativeEvent.offsetY;
                const centerX = event.target.clientWidth / 4;
                const centerY = event.target.clientHeight / 4;
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
              className=""
            >
              <p>ReactJs</p>
              <p>NextJs</p>
              <p>Tailwindcss</p>
              <p>Javascript</p>
              <p>Leetcode</p>
              <p>Git</p>
              <p>Java</p>
              <p>Python</p>
            </div>
          </div>
        </div>

        <Resume />
        <div
          className="pt-20 flex justify-center items-center text-center"
          id="contact"
          style={{ marginBottom: window.innerWidth <= 768 ? "3rem" : "6rem" }}
        >
          <div class="border-b border-gray-500 w-64"></div>
          <h1 className="text-center text-5xl ">Certification</h1>
          <div class="border-b border-gray-500 w-64"></div>
        </div>

        <Project />
      </div>{" "}
      <div className="pt-20 bg-mysecondcolor flex justify-center items-center text-center">
        <div class="border-b border-gray-500 w-64"></div>
        <h1 className="text-center text-5xl ">About Me</h1>
        <div class="border-b border-gray-500 w-64"></div>
      </div>
      <p
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
        className="p-5 bg-mysecondcolor ml-20 mr-20"
      >
        Akash Vishwakarma is a third-year student pursuing a Bachelor's degree
        in Computer Science and Engineering. He was raised in Guna by his
        father, who works as a carpenter, and his mother, who is a homemaker.
        Akash has always had a keen interest in problem-solving and innovation,
        which he attributes to being brought up in a family of makers and
        creators.
      </p>
      <Experience />
      <div className="pt-20  bg-mysecondcolor flex justify-center items-center text-center">
        <div class="border-b border-gray-500 w-64"></div>
        <h1 className="text-center text-5xl ">Contact Me</h1>
        <div class="border-b border-gray-500 w-64"></div>
      </div>
      <Contact />
    </>
  );
}

export default Home;
