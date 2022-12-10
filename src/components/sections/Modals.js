import React from "react";
import ProjectModal from "../ProjectModal";
// Modal Images
import rmdbImg from "../../images/projects/rmdb.png";
import rmdbImg2 from "../../images/projects/rmdb2.PNG";
import rmdbImgMb from "../../images/projects/rmdb-mb.jpg";
import spiderImg from "../../images/projects/spider.png";
import spiderImg2 from "../../images/projects/spider2.PNG";
import spiderImgMb from "../../images/projects/spider-mb.jpg";

function Modals() {
  return (
    <div>
      <ProjectModal
        id="rmdb-modal"
        name="Rick and Morty Database"
        desc="A database application for my favorite cartoon, Rick and Morty. I built this for myself and the entire fandom."
        info={[
          "The third party API's database has information on over 825 characters",
          "I built a Filter in the characters section, to search by Name/Status/Species/Gender.",
          "Also has Locations and Episodes section.",
          "Can show residents of each location, as well as characters who appeared in every episode.",
          "Uses Handlebars for layout.",
          "Uses Bootstrap for easy responsiveness.",
        ]}
        tech={[
          "Node JS",
          "Node-Fetch",
          "Express JS",
          "Handlebars",
          "Bootstrap",
          "Vercel",
        ]}
        image1={rmdbImg}
        image2={rmdbImg2}
        mbImage={rmdbImgMb}
      />
      <ProjectModal
        id="spider-modal"
        name="Spider PC Store"
        desc="An e-commerce app for an imaginary computer hardware store. Built as Capstone Project."
        tech={[
          "Node JS",
          "Express JS",
          "Handlebars",
          "Bootstrap",
          "MongoDB Atlas",
          "Vercel",
        ]}
        info={[
          "Uses MongoDB Atlas for database.",
          "The contact form is submittable, thanks to FormSpree.",
          "Can show products according to category.",
          "Uses modals for product info.",
          "Uses Handlebars for layout.",
          "Uses Bootstrap for easy responsiveness.",
        ]}
        image1={spiderImg}
        image2={spiderImg2}
        mbImage={spiderImgMb}
      />
    </div>
  );
}

export default Modals;
