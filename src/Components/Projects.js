import React, { Component } from "react";
import "../Assets/css/Projects.css";
import ProjectsCard from "./ProjectsCard";
import Data from "./Data";

function Projects() {
  const ProjectDetails = Data;

  return (
    <>
      <section id="projects" class="portfolio-mf sect-pt4 route">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="title-box text-center">
                <h3 class="title-a">Projects</h3>
                <p class="subtitle-a">
                  
                </p>
                <div class="line-mf"></div>
              </div>
            </div>
          </div>
          <div class="row">
            {ProjectDetails.map((ele) => (
              <ProjectsCard
                key={ele.id}
                img={ele.img}
                title={ele.title}
                tech={ele.tectStack}
                url = {ele.url}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
