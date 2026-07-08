import "../Assets/css/Education.css";
import bg from "../Assets/img/edubg.jpg";
import EducationCard from "./EducationCard";
import { EducationData as Data } from "../Data/education";

function Education() {
  return (
    <>
      <section id="education"  className="portfolio-mf sect-pt4 route">
        <div className="educontainer">
          <div className="title-box text-center">
            <h3 className="title-a">Education</h3>
            <p className="subtitle-a"></p>
            <div className="line-mf"></div>
          </div>
          <div
            className="section-counter paralax-mf bg-image"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div className="overlay-mfe"></div>
            <div className="w-full position-relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Data.map((e) => (
                  <EducationCard
                  id={e.id}
                    img={e.img}
                    inst={e.inst}
                    edu={e.edu}
                    cgpa={e.cgpa}
                    branch={e.branch}
                    startingYear={e.startingYear}
                    finishedYear={e.finishedYear}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;
