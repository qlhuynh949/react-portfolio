import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <>
      <main>
        <header class="Header">
          <h1>Quan Huynh</h1>
        </header>
        <div className="navContainer">
          <div className="row">
            <div className="col-1 indentColumn"></div>
            <div className="col-2" id="navSpan">
              <h1>Quan Huynh</h1>
            </div>
            <div className="col-9">
              <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="nav navbar-nav navbar-right">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        About
            </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/portfolio">
                        Portfolio
            </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        Contact
            </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Navbar;
