import React from "react";

function Nav() {
  return (
    <nav>
      {/* <!--Nav--> */}
      <nav className="navbar navbar-expand-lg p-3 navbar-dark">
        {/* <!--Brand--> */}
        <h2 className="inlanders accent2 mb-0">JUST-INK.EN</h2>
        {/* <!--Toggler--> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <!--Nav Content--> */}
        <div className="collapse navbar-collapse" id="navContent">
          {/* <!--Links--> */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-text">
            {/* <!--Projects--> */}
            <li className="nav-item mx-2">
              <a className="nav-link nav-custom hvr-shrink" href="#projects">
                <i className="bi bi-code-slash"></i> Projects
              </a>
            </li>
            {/* <!--Skills--> */}
            <li className="nav-item mx-2">
              <a className="nav-link nav-custom hvr-shrink" href="#skills">
                <i className="bi bi-star-fill"></i> Skills
              </a>
            </li>
            {/* <!--About Me--> */}
            <li className="nav-item mx-2">
              <a className="nav-link nav-custom hvr-shrink" href="#about">
                <i className="bi bi-person-circle"></i> About
              </a>
            </li>
            {/* <!--Contact--> */}
            <li className="nav-item mx-2">
              <a className="nav-link nav-custom hvr-shrink" href="#contact">
                <i className="bi bi-telephone-fill"></i> Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </nav>
  );
}

export default Nav;
