import React from "react";

function ContactCard(props) {
  return (
    <div className="col">
      <div className="contact-card" data-aos="zoom-in">
        <i className={`fa-4x fa-${props.iconType} fa-${props.icon}`}></i>
        <h5 className="mt-3 ellipsis">{props.value}</h5>
        <h5 className="ellipsis">{props.value2}</h5>
      </div>
    </div>
  );
}

export default ContactCard;
