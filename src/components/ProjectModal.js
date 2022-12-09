import React from "react";

function ProjectModal(props) {
  return (
    <div
      className="modal fade p-0"
      id={props.id}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
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
            <div className="row">
              <div className="col-lg-7">
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
                  className="project-img rounded shadow"
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
