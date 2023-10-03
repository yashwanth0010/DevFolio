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
                      <div className="col-sm-5 col-md-4">
                        <div className="about-img">
                          <img
                            src="assets/img/testimonial-2.jpg"
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-8">
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
                              <i class="bi bi-download"></i>
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
                        Curabitur non nulla sit amet nisl tempus convallis quis
                        ac lectus. Curabitur arcu erat, accumsan id imperdiet
                        et, porttitor at sem. Praesent sapien massa, convallis a
                        pellentesque nec, egestas non nisi. Nulla porttitor
                        accumsan tincidunt.
                      </p>
                      <p className="lead">
                        Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar a. Vivamus suscipit tortor eget felis porttitor
                        volutpat. Vestibulum ac diam sit amet quam vehicula
                        elementum sed sit amet dui. porttitor at sem.
                      </p>
                      <p className="lead">
                        Nulla porttitor accumsan tincidunt. Quisque velit nisi,
                        pretium ut lacinia in, elementum id enim. Nulla
                        porttitor accumsan tincidunt. Mauris blandit aliquet
                        elit, eget tincidunt nibh pulvinar a.
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
