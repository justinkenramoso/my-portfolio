import React from "react";

function Footer() {
  return (
    <div id="footer">
      <hr />
      <p>
        Made with React <i class="fa-brands fa-react"></i>
      </p>
      <div className="d-flex justify-content-center">
        <a href="https://www.facebook.com/justinken.ramoso">
          <i class="fa-brands fa-facebook fa-2xl mx-1 footer-icon"></i>
        </a>
        <a href="https://www.youtube.com/channel/UCB4XAwekCVgOopWRi_UpIVw">
          <i class="fa-brands fa-youtube fa-2xl mx-1  footer-icon"></i>
        </a>
        <a href="https://github.com/justinkenramoso">
          <i class="fa-brands fa-github fa-2xl mx-1  footer-icon"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
