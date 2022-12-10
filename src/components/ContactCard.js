import React from "react";

function ContactCard(props) {
  let link = props.link;
  function contactLink() {
    window.location = link;
  }
  return (
    <div className="col" data-aos="zoom-in">
      <div className="contact-card" onClick={contactLink}>
        <i className={`fa-4x fa-${props.iconType} fa-${props.icon}`}></i>
        <h5 className="mt-3 ellipsis">{props.value}</h5>
        <h5 className="ellipsis">{props.value2}</h5>
      </div>
    </div>
  );
}

export default ContactCard;
