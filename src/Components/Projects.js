import React, { Component } from "react";
import "../Assets/css/Projects.css";
import ProjectsCard from "./ProjectsCard";
import Data from "./Data";

function Projects() {
  const ProjectDetails = Data;

  return (
    <>
      <section id="projects" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Projects</h3>
                <p className="subtitle-a">
                  
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
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
