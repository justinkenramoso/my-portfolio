import React from "react";

function SkillCard(props) {
  return (
    <div className="col">
      <div className={`skill-card p-3 ${props.logo}`}>
        <div className="row">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <i className={`fa-4x fa-brands fa-${props.logo}`}></i>
          </div>
          <div className="d-none d-md-flex col-md-6 d-flex justify-content-start align-items-center">
            <h4 className={`skill-name m-0`}>{props.name}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
