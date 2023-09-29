import React, { Component } from "react";
import { Link } from "react-router-dom";
function ProjectsCard(props) {
  const img = props.img;
  const title = props.title;
  const tech = props.tech;

  return (
    <>
      <div class="col-md-4">
        <div class="projects-box">
          <a data-gallery="portfolioGallery" class="portfolio-lightbox">
            <div class="projects-img">
              <img src={img} alt="" class="img-fluid" />
            </div>
          </a>
          <div class="projects-content">
            <div class="row">
              <div class="col-sm-10">
                <h2 class="w-title">{title}</h2>
                <div class="w-more">
                  <span class="w-ctegory">
                    {tech.map((ele) => (
                      <span>{ele} | </span>
                    ))}
                  </span>{" "}
                </div>
              </div>
              <div class="col-sm-2">
                <div class="w-like">
                  <Link to='/projects'>
                    {" "}
                    <span class="bi bi-plus-circle"></span>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsCard;
