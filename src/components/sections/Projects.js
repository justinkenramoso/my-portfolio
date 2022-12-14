import React from "react";
import ProjectItem from "../ProjectItem";
// Project Images
import rmdbImg from "../../images/projects/rmdb.png";
import spiderImg from "../../images/projects/spider.png";
import gsImg from "../../images/projects/gs.PNG";
import ttImg from "../../images/projects/tt.PNG";

function Projects() {
  return (
    <div className="text-center container pt-3 accent1" id="projects">
      <h2 className="display-5 mb-5" data-aos="fade-up">
        Recent Projects
      </h2>
      <div className="row row-cols-1 row-cols-lg-2">
        <div className="col">
          <ProjectItem
            name="Timeless Trinkets (under dev)"
            image={ttImg}
            live="https://ttrinkets.vercel.app/"
            source="https://github.com/justinkenramoso/ttrinkets"
          />
        </div>
        <div className="col">
          <ProjectItem
            name="GameSnap"
            image={gsImg}
            live="https://game-snap.vercel.app/"
            source="https://github.com/justinkenramoso/gamesnap"
            modal="#gs-modal"
          />
        </div>
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
