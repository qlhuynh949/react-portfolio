import React from "react";
import "./About.css";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function About() {
  return (
    <>
      <section id="largeLayout" className="Main">
        <div className="row">
          <div className="col-1 indentColumn"></div>
          <div className="col-auto noLeft">
            <div className="container" id="AboutContainer">
              <h1 className="SubjectTitle">About</h1>
              <hr id="titleLine" />
              <div id="largeLayout" className="row">
                <div className="col-auto">
                  <img src="https://qlhuynh949.github.io/react-portfolio/assets/images/AboutMe.png" width="150px" height="150px" className="img-fluid" alt="Profile" />
                </div>
                <div className="col">
                  <p className="wordRap">
                    I am a computer programmer with over 20 years of software development in various industries. As a software development professional, I am engaged in learning new programming languages and methodologies hoping to
                    up level and improve upon my skillsets. Currently I am working with newer full stack mobile-first web technologies to further improve my skillsets in the web development aspect of software development.
                        </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="smallLayout">
        <div className="row">
          <div className="col-1 indentColumn"></div>
          <div className="col-auto noLeft">
            <div className="container" id="AboutContainer">
              <h1 className="SubjectTitle">About</h1>
              <hr id="titleLine" />
              <div className="card" >
                <img className="card-img-top" src="https://qlhuynh949.github.io/react-portfolio/assets/images/AboutMe.png" alt="Profile" />
                <div className="card-body">
                  <p className="card-text" id="smallLayoutParagraph">
                    I am a computer programmer with over 20 years of software development in various industries. As a software
                    development professional, I am engaged in learning new programming languages and methodologies hoping to up level
                    and improve
                    upon my skillsets. Currently I am working with newer full stack mobile-first web technologies to further improve
                    my skillsets in the web development aspect of software development.
                              </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;

