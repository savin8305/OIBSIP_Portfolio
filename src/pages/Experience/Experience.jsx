import React, { useEffect } from "react";
import { Page } from "../../components/Page";
import { experiences } from "../../data";
import { useScreenWidth } from "../../hooks";
import { ExperienceItem } from "./ExperienceItem";
import { StyledExperienceLayout } from "./ExperienceLayout.styled";

export const Experience = () => {
  const { width } = useScreenWidth();

  useEffect(() => {
    let cards = document.querySelectorAll(".experience-item");
    cards.forEach((card, i) => {
      card.classList.remove("active");
      if (i === 0) {
        card.classList.add("active");
      }
      card.addEventListener(width < 720 ? "click" : "mouseenter", (e) => {
        if (card.classList.contains("active")) {
          return;
        }
        const activeCard = document.querySelector('.experience-item.active');
        if (activeCard) {
          activeCard.classList.remove('active');
          activeCard.style.transform = 'rotateY(0deg)';
        }
        card.classList.add("active");
        card.style.transform = 'rotateY(360deg)';
      });
      card.addEventListener(width < 720 ? "click" : "mouseleave", (e) => {
        if (card.classList.contains("active")) {
          return;
        }
        card.style.transform = 'rotateY(0deg)';
      });
    });
  }, [width]);

  return (
  
      <StyledExperienceLayout className="py-40" >
        {experiences.map((exp, index) => (
          <ExperienceItem   key={index} data={exp} />
        ))}
      </StyledExperienceLayout>

  );
};
