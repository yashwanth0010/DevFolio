import React, { Component, useEffect, useState } from "react";
import "../Assets/css/About.css";
import resume from "../Assets/Resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function About() {
  const [height, setHeight] = useState(450);

  const zoomIn = () => {
    setHeight(500);
  };
  const zoomOut = () => {
    setHeight(450);
  };

  return (
    <>
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-sm-3 col-md-3">
                        <div className="about-img">
                          {/*<img
                            src="../imgs/dp.jpg"
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                            height={80}
                            width={100}
  />*/}
                        </div>
                      </div>
                      <div className="col-sm-9 col-md-9">
                        <div className="about-info">
                          <p>
                            <span className="title-s">Name: </span>{" "}
                            <span>Yashwanth Kumar Chamakura</span>
                          </p>
                          <p>
                            <span className="title-s">Profile: </span>{" "}
                            <span>full stack developer</span>
                          </p>
                          <p>
                            <span className="title-s">Email:</span>{" "}
                            <span>yashwanthkumar.chamakura@gmail.com</span>
                          </p>
                          <p>
                            <span className="title-s">Phone: </span>{" "}
                            <span>+91 7799995058</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="skill-mf">
                      <strong>
                        {" "}
                        <b>
                          <p style={{ textAlign: "center" }}>Resume</p>
                        </b>{" "}
                      </strong>
                      <div className="resume">
                        <a
                          className="maino"
                          href={resume}
                          download={"Yashwanth's Resume"}
                          onMouseEnter={zoomIn}
                          onMouseLeave={zoomOut}
                        >
                          <Document file={resume} className="Doc">
                            <Page
                              pageNumber={1}
                              renderTextLayer={false}
                              renderAnnotationLayer={false}
                              customTextRenderer={false}
                              height={height}
                            />
                          </Document>
                          <div className="overlayd">
                            <a
                              className="icond"
                              href={resume}
                              download={"Yashwanth's Resume"}
                            >
                              <i className="bi bi-download"></i>
                            </a>
                          </div>
                        </a>
                      </div>
                      {/*
                    <span>HTML</span> <span className="pull-right">85%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: "85%" ,  ariavaluenow:"85" ,  ariavaluemin:"0", ariavaluemax:"100"}}></div>
                    </div>
                    <span>CSS3</span> <span className="pull-right">75%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: "75%" ,ariavaluenow:"75" ,ariavaluemin:"0" ,ariavaluemax:"100"}}></div>
                    </div>
                    <span>PHP</span> <span className="pull-right">50%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: "50%", ariavaluenow:"50" ,ariavaluemin:"0", ariavaluemax:"100"}}></div>
                    </div>
                    <span>JAVASCRIPT</span> <span className="pull-right">90%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: "90%", ariavaluenow:"90" ,ariavaluemin:"0" ,ariavaluemax:"100"}}></div>
                    </div>*/}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About me</h5>
                      </div>
                      <p className="lead">
                      Hey there! I'm Yashwanth, a passionate and creative Software Developer with a love for all things tech. 🚀
                      </p>
                      <p className="lead">
                      In the world of 0s and 1s, I've found my playground, constantly exploring the vast landscape of software development and Machine Learning. With a toolbox filled with languages like Python, Java, R, C++, Javascript.
                      </p>
                      <p className="lead">
                      Through my academic endeavors and hands-on projects, I've honed my skills in Data Structures, Problem Solving, Software design, Version Control, Team collaboration.  I believe in the power of collaboration, and my experiences in team environments have taught me the importance of diverse perspectives and effective communication.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
