import React, { Component, useEffect } from "react";
import {useParams} from "react-router-dom";
import "../Assets/css/ProjectDetails.css";
import { Link } from "react-router-dom";
import PageAnimation from "./PageAnimation";
import { Swiper, SwiperSlide } from "swiper/react";
import Data from "./Data";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectCube,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cube";
function ProjectDetails() {
  const params = useParams();
  console.log(params.id);
  var data;
  for (let index = 0; index < Data.length; index++) {
    if (Data[index].url == params.id) {
           data = Data[index];
    }
    
  }

    useEffect(()=>{
      window.scrollTo(0,0);
    },[]);

  return (
    <>
      <PageAnimation>
        <div
          class="hero hero-single route bg-image"
          style={{ backgroundImage: `url(${"." + data.img})` }}
        >
          <div class="overlay-mf"></div>
          <div class="hero-content display-table">
            <div class="table-cell">
              <div class="container">
                <h2 class="hero-title mb-4" style={{color:"#dfd7d7"}}>{data.title}</h2>
                <ol class="breadcrumb d-flex justify-content-center">
                  <b>
                <strong>
                  <li class="breadcrumb-item" style={{color:"#dfd7d7"}}>
                    <Link to="/" style={{color:"#dfd7d7"}}>Home /  </Link>  Projects / {data.title}
                  </li>
                  </strong>
                  </b>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <main id="main">
          <section id="portfolio-details" class="portfolio-details">
            <div class="container">
              <div class="row ">
                <div class="col-lg-7">
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

        {data.projectImg.map((ele)=>(
                       <SwiperSlide>
                       <img src={ele}alt="" effect="cards" />
                     </SwiperSlide>
                    ))}

                    </Swiper>

                    <div class="swiper-pagination"></div>
                  </div>

                  <Link to="/">
                    <span class="bi bi-arrow-left-circle"></span>{" "}
                  </Link>
                </div>

                <div class="col-lg-5">
                  <div class="portfolio-info">
                    <h3>Project Information</h3>
                    <ul>
                    <li>
                        <strong>Title </strong>: {data.title}
                      </li>
                      <li>
                        <strong>Category </strong>: {data.category}
                      </li>
                      <li>
                        <strong>TechStack </strong>: {data.tectStack.map((ele)=><span>{ele} | </span>)}
                      </li>
                      <li>
                        <strong>Github </strong>:  <a href={data.github}  target="_blank">  {data.github.substring(8)} <i class="bi bi-box-arrow-up-right"></i> </a>
                      </li>
                      {
                        data.live && <li>
                          <strong>Live Project </strong>:  <a href={data.live}  target="_blank">  {data.live} <i class="bi bi-box-arrow-up-right"></i> </a>
                        </li>
                      }
                    </ul>
                  </div>
                  <div class="portfolio-description">
                    <h2>Project Description</h2>
                    {data.description.map((ele)=>(
                      <p><i class="bi bi-caret-right-fill"></i> {ele}</p>
                    ))}
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
                          All Rights Reserved
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
