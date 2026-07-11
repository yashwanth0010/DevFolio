import "../Assets/css/Projects.css";
import { ProjectCell } from "./ProjectsCard";
import { ProjectsData } from "../Data/projects";
import type { Project } from "../types/types";

function Projects() {
  const projects: Project[] = ProjectsData;

  return (
    <>
      <section id="projects" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Projects</h3>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <ProjectCell key={p.title} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
