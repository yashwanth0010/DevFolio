import React, { Component } from "react";
import "../Assets/css/Education.css";
import bg from "../Assets/img/edubg.jpg";
import EducationCard from "./EducationCard";

function Education() {
  const Data = [
    {
      id: 1,
      img: "../imgs/btech_icon.png",
      edu: "Bachelor's Degree",
      inst: "CMR College Of Engineering & Technology",
      cgpa: 8.56,
      branch:"CSE(AI & ML)"
    },
    {
        id: 2,
      img: "../imgs/inter_icon.png",
      edu: "Intermediate",
      inst: "Narayana Junior College",
      cgpa: 9.3,
    },
    {
        id: 3,
      img: "../imgs/school_icon.png",
      edu: "High School",
      inst: "Brilliant Grammar High School",
      cgpa: 9.8,
    }
  ];

  return (
    <>
      <section id="education"  class="portfolio-mf sect-pt4 route">
        <div class="educontainer">
          <div class="title-box text-center">
            <h3 class="title-a">Education</h3>
            <p class="subtitle-a"></p>
            <div class="line-mf"></div>
          </div>
          <div
            class="section-counter paralax-mf bg-image"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div class="overlay-mfe"></div>
            <div class="container position-relative">
              <div class="row">
                {Data.map((e) => (
                  <EducationCard
                    img={e.img}
                    inst={e.inst}
                    edu={e.edu}
                    cgpa={e.cgpa}
                    branch={e.branch}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;
