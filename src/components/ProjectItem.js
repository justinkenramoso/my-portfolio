import React from "react";

function ProjectItem(props) {
  return (
    <div data-aos="zoom-in">
      {/* <!--RMDB--> */}
      <img
        className="project-img rounded shadow"
        src={props.image}
        alt="Project"
        data-bs-toggle="modal"
        data-bs-target={props.modal}
      />
      <h3 className="mt-3">{props.name}</h3>
      <div className="row g-1 cool mb-5">
        <div className="col-6 text-end">
          <a
            className="project-btn"
            href={props.live}
            style={{ marginLeft: "auto" }}
          >
            <i className="bi bi-arrow-up-right-square"></i> Go Live
          </a>
        </div>
        <div className="col-6 text-start">
          <a className="project-btn" href={props.source}>
            <i className="bi bi-code-slash"></i> View Source
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
