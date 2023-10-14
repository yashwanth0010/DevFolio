import React, { Component } from "react";
import "../Assets/css/Achievements.css";
function Achievements() {
  return (
    <>
      <section id="achievements"  class="portfolio-mf sect-pt4 route">
      <div class="achieverow">
            <div class="col-sm-12">
              <div class="title-box text-center">
                <h3 class="title-a">Achievements</h3>
                <div class="line-mf"></div>
              </div>
            </div>
          </div>
        <div className="achievecard">
          <div className="maincard">
            <div className="line">
              <div className="Component right-5">
                <h4 className="p-3">
                  Google/Data Analytics Professional Certificate
                </h4>
                <p className="content">
                  Completed extensive six month job-ready Google Career
                  Certificate training. Demonstrated hands-on experience with
                  data cleaning, data visualization and Project management.
                </p>
              </div>
              <div className="Component right-5">
                <h4 className="p-3">Certificate of AI-ML Internship</h4>
                <p className="content">
                  Successfully completed 10 weeks AI-ML virtual internship by
                  AICTE supported by AWS academy
                </p>
              </div>
              <div className="Component right-5">
                <h4 className="p-3">
                  Participated in DevJam 2.0 Hackathon organizied by CMR College
                  of Engineering & Technology
                </h4>
                <p className="content">
                  Spearheaded a 5-member team in the development of a College
                  portal, utilizing PHP and MySQL.
                </p>
              </div>
              <div className='Component right-5'>
                            <h4 className='p-3'>Runner up in Web Development Competition in Azura(2022).</h4>
                            </div>
                            <div className='Component right-5'>
                            <h4 className='p-3'>Organised and assisted various college-level festivals and events.</h4>
                            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Achievements;
