import React, { Component, useEffect } from "react";
import overlay from "../Assets/img/overlay-bg.jpg";
import "../Assets/css/ProjectDetails.css";
import { Link } from "react-router-dom";
import PageAnimation from "./PageAnimation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCube,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cube";
function ProjectDetails() {

    useEffect(()=>{
      window.scrollTo(0,0);
    },[]);

  return (
    <>
      <PageAnimation>
        <div
          class="hero hero-single route bg-image"
          style={{ backgroundImage: `url(${overlay})` }}
        >
          <div class="overlay-mf"></div>
          <div class="hero-content display-table">
            <div class="table-cell">
              <div class="container">
                <h2 class="hero-title mb-4">Portfolio Details</h2>
                <ol class="breadcrumb d-flex justify-content-center">
                  <li class="breadcrumb-item">
                    <Link to="/">Home </Link>
                  </li>
                  <li class="breadcrumb-item active">
                    Projects / Portfolio Details
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <main id="mainly">
          <section id="portfolio-details" class="portfolio-details">
            <div class="container">
              <div class="row ">
                <div class="col-lg-8">
                  <div class="portfolio-details-slider swiper">
                    <Swiper
                      modules={[
                        Navigation,
                        Pagination,
                        Scrollbar,
                        Autoplay,
                        EffectCube,
                      ]}
                      spaceBetween={50}
                      loop={true}
                      speed={1000}
                      effect={"cube"}
                      grabCursor={true}
                      cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                      }}
                      pagination={{
                        clickable: true,
                        el: ".swiper-pagination",
                        type: "bullets",
                      }}
                      autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                      }}
                    >
                      <SwiperSlide>
                        <img src="./imgs/anpr.png" alt="" effect="cards" />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img src="./imgs/cmp.png" alt="" effect="cards" />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img src="./imgs/icudp.png" alt="" />
                      </SwiperSlide>
                    </Swiper>

                    <div class="swiper-pagination"></div>
                  </div>

                  <Link to="/">
                    <span class="bi bi-arrow-left-circle"></span>{" "}
                  </Link>
                </div>

                <div class="col-lg-4">
                  <div class="portfolio-info">
                    <h3>Project information</h3>
                    <ul>
                      <li>
                        <strong>Category</strong>: Web design
                      </li>
                      <li>
                        <strong>Client</strong>: ASU Company
                      </li>
                      <li>
                        <strong>Project date</strong>: 01 March, 2020
                      </li>
                      <li>
                        <strong>Project URL</strong>:{" "}
                        <a href="#">www.example.com</a>
                      </li>
                    </ul>
                  </div>
                  <div class="portfolio-description">
                    <h2>This is an example of portfolio detail</h2>
                    <p>
                      Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                      itaque inventore commodi labore quia quia. Exercitationem
                      repudiandae officiis neque suscipit non officia eaque
                      itaque enim. Voluptatem officia accusantium nesciunt est
                      omnis tempora consectetur dignissimos. Sequi nulla at esse
                      enim cum deserunt eius.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="copyright-box">
                  <p class="copyright">
                    &copy; Copyright <strong>DevFolio</strong>. All Rights
                    Reserved
                  </p>
                  <div class="credits"></div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </PageAnimation>
    </>
  );
}

export default ProjectDetails;
