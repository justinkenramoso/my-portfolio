import React from "react";
import ProjectModal from "../ProjectModal";
// Modal Images
import rmdbImg from "../../images/projects/rmdb.png";
import spiderImg from "../../images/projects/spider.png";

function Modals() {
  return (
    <div>
      <ProjectModal id="rmdb-modal" title="RMDB" img={rmdbImg} />
      <ProjectModal id="spider-modal" title="Spider PC Store" img={spiderImg} />
    </div>
  );
}

export default Modals;
