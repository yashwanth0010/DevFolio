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
  EffectCoverflow
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

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
          className="hero hero-single route bg-image"
          style={{ backgroundImage: `url(${"." + data.img})` }}
        >
          <div className="overlay-mf"></div>
          <div className="hero-content display-table">
            <div className="table-cell">
              <div className="container">
                <h2 className="hero-title mb-4" style={{color:"#dfd7d7"}}>{data.title}</h2>
                <ol className="breadcrumb d-flex justify-content-center">
                  <b>
                <strong>
                  <li className="breadcrumb-item" style={{color:"#dfd7d7"}}>
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
          <section id="portfolio-details" className="portfolio-details">
            <div className="container">
              <div className="row ">
                <div className="col-lg-7">
                  <div className="portfolio-details-slider swiper">
                    <Swiper
                      modules={[
                        Navigation,
                        Pagination,
                        Scrollbar,
                        Autoplay,
                        EffectCoverflow

                      ]}
                      spaceBetween={50}
                      loop={true}
                      speed={1000}
                      effect={"coverflow"}
                      grabCursor={true}
                      coverflowEffect={{
                          slideShadows: true,
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

                    <div className="swiper-pagination"></div>
                  </div>

                  <Link to="/">
                    <span className="bi bi-arrow-left-circle"></span>{" "}
                  </Link>
                </div>

                <div className="col-lg-5">
                  <div className="portfolio-info">
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
                        <strong>Github </strong>:  <a href={data.github}  target="_blank">  {data.github.substring(8)} <i className="bi bi-box-arrow-up-right"></i> </a>
                      </li>
                      {
                        data.live && <li>
                          <strong>Live Project </strong>:  <a href={data.live}  target="_blank">  {data.live} <i className="bi bi-box-arrow-up-right"></i> </a>
                        </li>
                      }
                    </ul>
                  </div>
                  <div className="portfolio-description">
                    <h2>Project Description</h2>
                    {data.description.map((ele)=>(
                      <p><i className="bi bi-caret-right-fill"></i> {ele}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                  <p className="copyright">
                          All Rights Reserved
                  </p>
                  <div className="credits"></div>
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
