import React from "react";
import ContactCard from "../ContactCard";
import ContactForm from "../ContactForm";
import Footer from "../Footer";

function Contact() {
  return (
    <div className="p-3 text-center" id="contact">
      <h2 className="display-5" data-aos="fade-up">
        Contact
      </h2>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-lg-2">
          <div className="col d-flex flex-column align-items-center mt-5 order-1 order-lg-0">
            <div className="row row-cols-2 gy-3">
              <ContactCard
                icon="envelope"
                iconType="solid"
                value="justinken.ramoso"
                value2="@gmail.com"
              />
              <ContactCard icon="phone" iconType="solid" value="09122795762" />
              <ContactCard
                icon="linkedin"
                iconType="brands"
                value="LinkedIn"
                link="https://www.linkedin.com/in/justin-ken-ramoso-1a63b0255/"
              />
              <ContactCard
                icon="facebook-messenger"
                iconType="brands"
                value="Messenger"
                link="https://www.messenger.com/t/100017549310685"
              />
            </div>
          </div>
          <div className="col">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
