import React from "react";
import SkillCard from "../SkillCard";
const accent1 = "#002B5B";

function Skills() {
  return (
    <div className="text-center py-3" id="skills">
      <h2 className="display-5" data-aos="fade-up">
        My Skills
      </h2>
      <div className="container my-5">
        <div className="row row-cols-3 row-cols-md-2 row-cols-lg-3 g-4">
          <SkillCard name="React JS" logo="react" />
          <SkillCard name="Node JS" logo="node-js" />
          <SkillCard name="Bootstrap" logo="bootstrap" />
          <SkillCard name="Sass" logo="sass" />
          <SkillCard name="JavaScript" logo="js" />
          <SkillCard name="HTML" logo="html5" />
          <SkillCard name="CSS" logo="css3-alt" />
          <SkillCard name="GitHub" logo="github" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
