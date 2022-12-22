import React from "react";
import Nav from "../Nav";

function Landing() {
  return (
    // <!--Header-->
    <header>
      <Nav />
      {/* <!--Intro--> */}
      <div className="text-center p-3 text-light animate__animated animate__fadeIn animate__delay-1s animate__slow">
        {/* <!--Header--> */}
        <h2 className="intro-header display-2">
          Hi, I am
          <span className="robot justin accent2 d-inline-block ms-3">
            {" "}
            Justin.
          </span>
        </h2>
        {/* <!--Text--> */}
        <h3 className="intro-text">
          I am a Web Developer <br />
          currently looking for
          <br />a job opportunity.
        </h3>
        {/* <!--Links--> */}
        <div id="linkButtons">
          {/* <!--GitHub--> */}
          <a
            className="introBtn gitBtn hvr-grow-rotate"
            href="https://github.com/justinkenramoso"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github"></i> GitHub
          </a>
          {/* <!--LinkedIn--> */}
          <a
            className="introBtn linkedInBtn hvr-grow-rotate"
            href="https://www.linkedin.com/in/justin-ken-ramoso-1a63b0255/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin"></i> LinkedIn
          </a>
          {/* <!--Resume--> */}
          <a
            className="introBtn resumeBtn hvr-grow-rotate"
            href="https://drive.google.com/file/d/1PX85_zouiIJ7N1CpxCysQBtrhul3l6Sb/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-file-text"></i> Resume
          </a>
        </div>
      </div>
      {/* <!--Learn More--> */}
      <div className="mt-5 pb-1">
        <a className="learn-more" href="#projects">
          <h5 className="animate__animated animate__backInUp animate__delay-2s">
            Learn More
            <i className="fa-solid fa-circle-down fa-bounce ms-2"></i>
          </h5>
        </a>
      </div>
    </header>
  );
}

export default Landing;
