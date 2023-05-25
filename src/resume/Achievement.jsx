import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { useInView } from "react-intersection-observer";
import {ecomerce,portfolio,edu,labour,todo,netflix} from "../assets/index"
const data = [
  {
    title: "Ecomerce Plateform.",
    subTitle: "Ecomerce Plateform.",
    result: "Success",
    des:
      "This is the biggest project where i implemented my all fullstack knowledge",
    className: "max-w-xs md:max-w-md",
    link:ecomerce
  },
  {
    title: "Three.js PortFolio.",
    subTitle: "Personal PortFolio .",
    result: "Success",
    des:
      "This is Mern portfolio succesfully developed with online references which teaches me a lot",
    className: "max-w-xs md:max-w-md",
    link:portfolio,
    demoButtonText:"",
    githublink:"https://github.com/savin8305/Todo"
  },
  {
    title: "SkillBuilder",
    subTitle: "SkillBuilder .",
    result: "Success",
    des:
      "This is an subscription Based plateform build using chakra ui and  mern stack",
    className: "max-w-xs md:max-w-md",
    link:edu
  },
  {
    title: "Let's Build.",
    subTitle: "Let's Build.",
    result: "Success",
    des:
      "This is online Bridge for labours and contractor !",
    className: "max-w-xs md:max-w-md",
    link:labour
  },
  {
    title:"Todo application.",
    subTitle: "ToDo Application.",
    result: "Success",
    des:
      "React Redux Based todo app with category and crud operartions",
    className: "max-w-xs md:max-w-md",
    link:todo
  },
  {
    title: "Netflix Clone",
    subTitle: "Netflix Clone .",
    result: "Success",
    des:
      "This is netflix clone with latest tech stack ",
    className: "max-w-xs md:max-w-md",
    link:netflix
  },
];

const Achievement = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  // Split the data into two arrays - one for the left section and another for the right section
  const leftData = data.filter((item, index) => index % 2 === 0);
  const rightData = data.filter((item, index) => index % 2 !== 0);

  return (
    <div className="py-12 bg-mysecondcolor  font-titleFont grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <div className="flex flex-col px-9 gap-4"></div>
        <div ref={ref} className="mt-14  from-gray-800 to-gray-900 text-white rounded-tl-3xl rounded-bl-3xl h-half border-l-[2px] border-l-black border-opacity-0 overflow-y-hidden">
          {leftData.map((item, index) => (
            <motion.div
              key={index}
              animate={
                inView
                  ? {
                      opacity: 1,
                      transition: { duration: 0.5, delay: 0.1 + 0.1 * index },
                    }
                  : { opacity: 0 }
              }
            >
              <div className="p-4">
                <ResumeCard {...item} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div>
        <div className="mt-14  from-gray-800 to-gray-900 text-white rounded-tl-3xl rounded-bl-3xl h-half border-l-[2px] border-l-black border-opacity-0 overflow-y-hiddenflex px-10 flex-col gap-4"></div>
        <div className="mt-14 h-full overflow-y-auto">
          {rightData.map((item, index) => (
            <motion.div
              key={index}
              animate={
                inView
                  ? {
                      opacity: 1,
                      transition: { duration: 0.5, delay: 0.2 + 0.2 * index },
                    }
                  : { opacity: 0 }
              }
            >
              <div className="p-4">
                <ResumeCard {...item} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievement;
