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
      <div className="modal-dialog modal-dialog-centered">
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
            {/* <!--Content--> */}
            <img
              className="modal-img rounded shadow"
              src={props.img}
              alt="Project"
            />
            <h3 className="mc-title my-3 text-center accent1">{props.title}</h3>
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
