import React from "react";

function AboutCard(props) {
  let content = props.content;
  let contentList = content.map((item, i) => {
    return (
      <li key={i}>
        <h4>{item.label}</h4>
        <h5 className="roboto fw-light">{item.desc}</h5>
      </li>
    );
  });
  return (
    <div className="col">
      <div className="about-card">
        <h4 className="about-title">{props.title}</h4>
        <hr />
        <ul className="text-start">{contentList}</ul>
      </div>
    </div>
  );
}

export default AboutCard;
