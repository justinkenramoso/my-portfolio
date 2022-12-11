import React from "react";
import AboutCard from "../AboutCard";

function About() {
  return (
    <div className="p-3 text-center" id="about">
      {/* <!-- Header --> */}
      <h2 className="display-5" data-aos="fade-up">
        About Me
      </h2>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-lg-3 gy-3" data-aos="fade-up">
          <AboutCard
            title="Education"
            icon="book"
            content={[
              {
                label: "Arellano University",
                desc: "Senior High School. Took the ICT strand, where my passion for coding began. Here I learned the basics of Java, Turbo C, and HTML.",
              },
              {
                label: "Taguig City University",
                desc: "College. Took the BSCS Course, but dropped out after the 1st year to pursue a job ASAP, due do financial problems.",
              },
            ]}
          />
          <AboutCard
            title="Experience"
            icon="code"
            content={[
              {
                label: "KodeGo Full Stack Web Development Bootcamp",
                desc: "When I started, I only knew very little about HTML and libraries/frameworks. After the bootcamp, I can now build my own Full Stack Web projects, and now I am hoping to land my first job in Web Development.",
              },
            ]}
          />
          <AboutCard
            title="Personality"
            icon="face-smile"
            content={[
              {
                label: "As a Developer",
                desc: "I love building in both the Front and Back End. I like simple, minimalist designs.",
              },
              {
                label: "Others",
                desc: "I am a positive/optimistic person, and I always try to be friends with everyone. When not coding, I play musical instruments and retro games.",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
