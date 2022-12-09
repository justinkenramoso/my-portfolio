import React from "react";
import ProjectModal from "../ProjectModal";
// Modal Images
import rmdbImg from "../../images/projects/rmdb.png";
import rmdbImg2 from "../../images/projects/rmdb2.PNG";
import rmdbImgMb from "../../images/projects/rmdb-mb.jpg";
import spiderImg from "../../images/projects/spider.png";

function Modals() {
  return (
    <div>
      <ProjectModal
        id="rmdb-modal"
        name="Rick and Morty Database"
        image1={rmdbImg}
        image2={rmdbImg2}
        mbImage={rmdbImgMb}
      />
      <ProjectModal
        id="spider-modal"
        name="Spider PC Store"
        image1={spiderImg}
      />
    </div>
  );
}

export default Modals;
