import React, { Component } from 'react';
import '../Assets/css/About.css';
import resume from "../Assets/Resume.pdf";
import { Document, Page } from 'react-pdf';
import { useState } from 'react';

function About() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber] = useState(1);
  
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

    return (  
        <>
            <section id="about" class="about-mf sect-pt4 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="box-shadow-full">
              <div class="row">
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-sm-5 col-md-4">
                      <div class="about-img">
                        <img src="assets/img/testimonial-2.jpg" class="img-fluid rounded b-shadow-a" alt=""/>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-8">
                      <div class="about-info">
                        <p><span class="title-s">Name: </span> <span>Yashwanth Kumar</span></p>
                        <p><span class="title-s">Profile: </span> <span>full stack developer</span></p>
                        <p><span class="title-s">Email:</span> <span>yashwanthkumar.chamakura@gmail.com</span></p>
                        <p><span class="title-s">Phone: </span> <span>+91 7799995058</span></p>
                      </div>
                    </div>
                  </div>

              
<div>
      <Document
        file={resume}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>

{     /*             <div class="skill-mf">
                    <p class="title-s">Skill</p>
                    <span>HTML</span> <span class="pull-right">85%</span>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style={{width: "85%" ,  ariavaluenow:"85" ,  ariavaluemin:"0", ariavaluemax:"100"}}></div>
                    </div>
                    <span>CSS3</span> <span class="pull-right">75%</span>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style={{width: "75%" ,ariavaluenow:"75" ,ariavaluemin:"0" ,ariavaluemax:"100"}}></div>
                    </div>
                    <span>PHP</span> <span class="pull-right">50%</span>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style={{width: "50%", ariavaluenow:"50" ,ariavaluemin:"0", ariavaluemax:"100"}}></div>
                    </div>
                    <span>JAVASCRIPT</span> <span class="pull-right">90%</span>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style={{width: "90%", ariavaluenow:"90" ,ariavaluemin:"0" ,ariavaluemax:"100"}}></div>
                    </div>
    </div>*/}

    
                </div>
                <div class="col-md-6">
                  <div class="about-me pt-4 pt-md-0">
                    <div class="title-box-2">
                      <h5 class="title-left">
                        About me
                      </h5>
                    </div>
                    <p class="lead">
                      Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id
                      imperdiet et, porttitor
                      at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla
                      porttitor accumsan tincidunt.
                    </p>
                    <p class="lead">
                      Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis
                      porttitor volutpat. Vestibulum
                      ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.
                    </p>
                    <p class="lead">
                      Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                      Nulla porttitor accumsan
                      tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
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