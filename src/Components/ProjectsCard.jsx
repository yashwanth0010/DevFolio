import React, { Component } from "react";
import { Link } from "react-router-dom";
import PageAnimation from "./PageAnimation";
function ProjectsCard(props) {
  const img = props.img;
  const title = props.title;
  const tech = props.tech;
  const url = props.url;

  return (
    <>
      <div className="col-md-4">
        <div className="projects-box">
          <PageAnimation>
            <Link to={"/projects/" + url}>
              <a data-gallery="portfolioGallery" className="portfolio-lightbox">
                <div className="projects-img">
                  <img src={img} alt="" className="img-fluid" />
                </div>
              </a>
              <div className="projects-content">
                <div className="row">
                  <div className="col-sm-10">
                    <h2 className="w-title">{title}</h2>
                    <div className="w-more">
                      <span className="w-ctegory" key={props.id}>
                        {tech.map((ele) => (
                          <span key={props.id}>{ele} | </span>
                        ))}
                      </span>{" "}
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="w-like">
                      <Link to= {"/projects/" + url}>
                        <span className="bi bi-box-arrow-right"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </PageAnimation>
        </div>
      </div>
    </>
  );
}

export default ProjectsCard;
