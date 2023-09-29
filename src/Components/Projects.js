import React, { Component } from "react";
import "../Assets/css/Projects.css";
import ProjectsCard from "./ProjectsCard";
function Projects() {
  const ProjectDetails = [
    {
      "id" : 1,
      "img" : "work-1.jpg",
      "title": "Automatic Number Plate Recognition",
      "tectStack" : ["Python", "OpenCv"],
    },
    {
      "id" : 2,
      "img" : "work-2.jpg",
      "title" : "DWiz",
      "tectStack" : ["R", "Css", "Cloud"],
    },
  ];
 // const data = JSON.parse(ProjectDetails);
  //console.log(data);

  return (
    <>
      <section id="projects" class="portfolio-mf sect-pt4 route">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="title-box text-center">
                <h3 class="title-a">Projects</h3>
                <p class="subtitle-a">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <div class="line-mf"></div>
              </div>
            </div>
          </div>
          <div class="row">
              {ProjectDetails.map((ele)=>(
                  <ProjectsCard key={ele.id} img={ele.img} title={ele.title} tech={ele.tectStack}/>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
