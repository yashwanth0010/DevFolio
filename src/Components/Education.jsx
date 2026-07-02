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
      <section id="education"  className="portfolio-mf sect-pt4 route">
        <div className="educontainer">
          <div className="title-box text-center">
            <h3 className="title-a">Education</h3>
            <p className="subtitle-a"></p>
            <div className="line-mf"></div>
          </div>
          <div
            className="section-counter paralax-mf bg-image"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div className="overlay-mfe"></div>
            <div className="container position-relative">
              <div className="row">
                {Data.map((e) => (
                  <EducationCard
                  key={e.id}
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
