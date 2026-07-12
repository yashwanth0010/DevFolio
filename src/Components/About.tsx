import { useEffect, useRef, useState } from "react";
import "../Assets/css/About.css";
import resume from "../assets/latest.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import { Shapes } from "./Shapes";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
import { AboutData as data } from "../Data/about";

function About() {
  const [visible, setVisible] = useState(false);
  const targetRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Delay rendering by 1 second
          setVisible(true);
          observer.disconnect(); // Stop observing after first trigger
        }
      },
      { threshold: 0.15 } // Trigger when 20% of the element is visible
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => observer.disconnect();
  }, []);


  return (
    <>

      <section id="about" className="about-mf sect-pt4 route relative pl-12 sm:pl-20 transition-all duration-3500">
        <div ref={targetRef} className={[
          "relative pl-12 sm:pl-20",
          "transition-all duration-2500",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        ].join(" ")}
          style={{ transitionDelay: `${120}ms` }} >
          {visible &&
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="box-shadow-full  border border-white/6">
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
                              <p className="font-bold">
                                <span className="title-s">Name: </span>{" "}
                                <span>Yashwanth Kumar Chamakura</span>
                              </p>
                              <p className="font-bold">
                                <span className="title-s">Profile: </span>{" "}
                                <span>Full Stack Developer</span>
                              </p>
                              <p className="font-bold">
                                <span className="title-s">Email:</span>{" "}
                                <span>yashwanthkumar.chamakura@gmail.com</span>
                              </p>
                              <p className="font-bold">
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
                            >
                              <Document file={resume} className="Doc">
                                <Page
                                  pageNumber={1}
                                  renderTextLayer={false}
                                  renderAnnotationLayer={false}
                                  height={550}
                                  className="Doc"
                                />
                              </Document>
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
                          {
                            data.map((para) => (
                              <p className="font-semibold">
                                {para.para}
                              </p>
                            ))
                          }
                        </div>
                        <Shapes shapesCount={50} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div >
      </section>

    </>
  );
}

export default About;
