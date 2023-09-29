import React, { Component } from 'react';
import '../Assets/css/Projects.css';
import logo1 from '../Assets/img/work-1.jpg';
import logo2 from '../Assets/img/work-2.jpg';
import logo3 from '../Assets/img/work-3.jpg';
import logo4 from '../Assets/img/work-4.jpg';
import logo5 from '../Assets/img/work-5.jpg';
import logo6 from '../Assets/img/work-6.jpg';
function Projects() {
    return (  
        <>
            <section id="projects" class="portfolio-mf sect-pt4 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-box text-center">
              <h3 class="title-a">
                Projects
              </h3>
              <p class="subtitle-a">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div class="line-mf"></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="projects-box">
              <a href="assets/img/projects-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox">
                <div class="projects-img">
                  <img src= {logo1} alt="" class="img-fluid"/>
                </div>
              </a>
              <div class="projects-content">
                <div class="row">
                  <div class="col-sm-8">
                    <h2 class="w-title">Lorem impsum dolor</h2>
                    <div class="w-more">
                      <span class="w-ctegory">Web Design</span> / <span class="w-date">18 Sep. 2018</span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="w-like">
                      <a href="portfolio-details.html"> <span class="bi bi-plus-circle"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="projects-box">
              <a href="assets/img/projects-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox">
                <div class="projects-img">
                  <img src={logo2} alt="" class="img-fluid"/>
                </div>
              </a>
              <div class="projects-content">
                <div class="row">
                  <div class="col-sm-8">
                    <h2 class="w-title">Loreda Cuno Nere</h2>
                    <div class="w-more">
                      <span class="w-ctegory">Web Design</span> / <span class="w-date">18 Sep. 2018</span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="w-like">
                      <a href="portfolio-details.html"> <span class="bi bi-plus-circle"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="projects-box">
              <a href="assets/img/projects-3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox">
                <div class="projects-img">
                  <img src={logo3} alt="" class="img-fluid"/>
                </div>
              </a>
              <div class="projects-content">
                <div class="row">
                  <div class="col-sm-8">
                    <h2 class="w-title">Mavrito Lana Dere</h2>
                    <div class="w-more">
                      <span class="w-ctegory">Web Design</span> / <span class="w-date">18 Sep. 2018</span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="w-like">
                      <a href="portfolio-details.html"> <span class="bi bi-plus-circle"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="projects-box">
              <a href="assets/img/projects-4.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox">
                <div class="projects-img">
                  <img src={logo4} alt="" class="img-fluid"/>
                </div>
              </a>
              <div class="projects-content">
                <div class="row">
                  <div class="col-sm-8">
                    <h2 class="w-title">Bindo Laro Cado</h2>
                    <div class="w-more">
                      <span class="w-ctegory">Web Design</span> / <span class="w-date">18 Sep. 2018</span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="w-like">
                      <a href="portfolio-details.html"> <span class="bi bi-plus-circle"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="projects-box">
              <a href="assets/img/projects-5.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox">
                <div class="projects-img">
                  <img src={logo5} alt="" class="img-fluid"/>
                </div>
              </a>
              <div class="projects-content">
                <div class="row">
                  <div class="col-sm-8">
                    <h2 class="w-title">Studio Lena Mado</h2>
                    <div class="w-more">
                      <span class="w-ctegory">Web Design</span> / <span class="w-date">18 Sep. 2018</span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="w-like">
                      <a href="portfolio-details.html"> <span class="bi bi-plus-circle"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="projects-box">
              <a href="assets/img/projects-6.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox">
                <div class="projects-img">
                  <img src={logo6} alt="" class="img-fluid"/>
                </div>
              </a>
              <div class="projects-content">
                <div class="row">
                  <div class="col-sm-8">
                    <h2 class="w-title">Studio Big Bang</h2>
                    <div class="w-more">
                      <span class="w-ctegory">Web Design</span> / <span class="w-date">18 Sep. 2017</span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="w-like">
                      <a href="portfolio-details.html"> <span class="bi bi-plus-circle"></span></a>
                    </div>
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

export default Projects;