import React from 'react';
import '../Assets/css/Achievements.css';
import { achievements } from '../Data/achievements';
import { Shapes } from './Shapes';

function Achievements() {
  return (
    <>
      <section id="achievements" className="portfolio-mf sect-pt4 route">
        <div className="achieverow">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Achievements</h3>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="achievecard">
          <div className="row">
            <div className="col-sm-8">
              <div className="maincard">
                <div className="line">
                  {achievements.map((achievement, index) => (
                    <div className="Component right-5" key={`${achievement.Title}-${index}`}>
                      <h4 className="p-3">
                        {achievement.Title}
                        {achievement.Link && (
                          <span>
                            <span className="p-3">|</span>
                            <a
                              href={achievement.Link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="achievement-link">
                              {achievement.LinkText || 'Certificate'}
                            </a>
                          </span>
                        )}
                      </h4>
                      <p className="content">{achievement.Description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <Shapes shapesCount={40} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Achievements;
