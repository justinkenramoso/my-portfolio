import React from "react";

function ContactForm() {
  return (
    <div className="px-5 text-start mb-5" data-aos="zoom-in">
      <form action="https://formspree.io/f/xwkzgaek" method="POST">
        <label className="form-label fs-5 mb-0" htmlFor="name">
          Name
        </label>
        <input
          className="form-control"
          type="text"
          name="name"
          id="name"
          required
        />
        <label className="form-label fs-5 mt-3 mb-0" htmlFor="email">
          Email
        </label>
        <input
          className="form-control"
          type="email"
          name="email"
          id="email"
          required
        />
        <label className="form-label fs-5 mt-3 mb-0" htmlFor="message">
          Message
        </label>
        <textarea
          className="form-control"
          name="message"
          id="message"
          required
        />
        <div className="d-flex justify-content-end align-items-center mt-4">
          <button className="btn btn-light px-5" type="submit">
            <i class="fa-solid fa-paper-plane"></i> Send
          </button>
        </div>
      </form>
      <hr className="my-5 d-lg-none" />
    </div>
  );
}

export default ContactForm;
