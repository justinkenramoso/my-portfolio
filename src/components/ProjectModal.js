import React from "react";

function ProjectModal(props) {
  let tech = props.tech;
  let info = props.info;
  let techList = tech.map((item, i) => {
    return (
      <li key={i} className="roboto fw-light">
        {item}
      </li>
    );
  });
  let infoList = info.map((item, i) => {
    return (
      <li key={i} className="roboto fw-light">
        {item}
      </li>
    );
  });
  return (
    <div
      className="modal fade p-0"
      id={props.id}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Project Info
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <h3 className="text-center modal-projname mb-4">{props.name}</h3>
            <div className="row">
              <div className="col-lg-6">
                <h5 className="roboto fw-light">{props.desc}</h5>
                <h5 className="roboto mt-3 fw-bold">Technologies Used: </h5>
                <ul>{techList}</ul>
              </div>
              <div className="col-lg-6">
                <h5 className="roboto fw-bold">Information: </h5>
                <ul>{infoList}</ul>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-lg-7 d-flex flex-column justify-content-center">
                <img
                  className="project-img rounded shadow mb-3"
                  src={props.image1}
                  alt="Project"
                />
                <img
                  className="project-img rounded shadow"
                  src={props.image2}
                  alt="Project"
                />
              </div>
              <div className="col-lg-5">
                <img
                  className="project-img rounded shadow mt-3 mt-lg-0"
                  src={props.mbImage}
                  alt="Project"
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-dark"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
