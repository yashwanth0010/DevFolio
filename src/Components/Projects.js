import React, { Component } from "react";
import "../Assets/css/Projects.css";
import ProjectsCard from "./ProjectsCard";

function Projects() {
  const ProjectDetails = [
    {
      id: 1,
      img: "./imgs/anpr.png",
      title: "Automatic Number Plate Recognition",
      tectStack: ['Python', 'Image Processing', 'OpenCV', 'Tkinter', 'Excel'],
    },
    {
      id: 2,
      img: "./imgs/dwiz.png",
      title: "DWiz",
      tectStack: ['R', 'Ggplot', 'Tidyverse', 'ShinyR', 'CSS', 'Bootstrap', 'Shinyapps Cloud'],
    },
    {
      id: 3,
      img: "./imgs/icudp.png",
      title: "Image Captioning using Deep Learning",
      tectStack: ['Python', 'Keras', 'Tensorflow', 'Pillow', 'Deep Learning models'],
    },
    {
      id: 4,
      img: "./imgs/cmp.png",
      title: "College Management Portal",
      tectStack: ['Python', 'Django', 'MySQL', 'CSS', 'Bootstrap'],
    },
  ];

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
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
