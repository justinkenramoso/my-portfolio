import React from "react";
import ProjectItem from "../ProjectItem";
// Project Images
import rmdbImg from "../../images/projects/rmdb.png";
import spiderImg from "../../images/projects/spider.png";

function Projects() {
  return (
    <div className="text-center container pt-3 accent1" id="projects">
      <h2 className="display-5 mb-5" data-aos="fade-up">
        Recent Projects
      </h2>
      <div className="row row-cols-1 row-cols-lg-2">
        <div className="col">
          <ProjectItem
            name="Rick and Morty Database"
            image={rmdbImg}
            live="https://rm-db.vercel.app/"
            source="https://github.com/justinkenramoso/rmdb"
            modal="#rmdb-modal"
          />
        </div>
        <div className="col">
          <ProjectItem
            name="Spider PC Store"
            image={spiderImg}
            live="https://spider-pc-store.vercel.app/"
            source="https://github.com/justinkenramoso/spider-pc-store"
            modal="#spider-modal"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
