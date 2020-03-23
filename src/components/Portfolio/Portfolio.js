import React from "react";
import "./Portfolio.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Portfolio() {
  return (
    <>
      <section id="largeLayout" className="Main">
        <div className="row">
          <div className="col-1 indentColumn"></div>
          <div className="col-auto noLeft">
            <div className="container">
              <h1 className="SubjectTitle">Profile</h1>
              <hr id="titleLine" />
              <div id="largeLayout" className="row">
                <div className="col-auto">
                  <div id="portfolioContent">

                    <div className="row">
                      <div className="col-6">
                        <div className="card" >
                          <a href="https://cprom.github.io/running-wild/"><img className="card-img-top" src="https://qlhuynh949.github.io/react-portfolio/assets/images/UCIEats.png" alt="UCI Eats" height="200px" width="200px" /></a>
                            <div className="card-body">
                              <p className="card-text"><a href="https://cprom.github.io/running-wild/">UCI Eats</a> - An application to help plan out a weekend</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-6">
                          <div className="card" >
                          <img className="card-img-top" src="https://qlhuynh949.github.io/react-portfolio/assets/images/eFlow.png" alt="eFlow" height="200px"
                              width="200px" />
                            <div className="card-body">
                              <p className="card-text"><a href="https://github.com/ariasadeghi530/eFlow-/">eFlow GitHub</a>
                              </p>
                              <p className="card-text"><a href="https://frozen-atoll-04274.herokuapp.com/">eFlow Heroku
                                Deployment</a> - eFlow is an only trade, buy, sell web application for electronics,
                              automotive and apparel</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="card" >
                            <img className="card-img-top" src="https://placehold.it/200x200" alt="Project3" />
                            <div className="card-body">
                              <p className="card-text">Project 3</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="card" >
                            <img className="card-img-top" src="https://placehold.it/200x200" alt="Project4" />
                            <div className="card-body">
                              <p className="card-text">Project 4</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="card" >
                            <img className="card-img-top" src="https://placehold.it/200x200" alt="Project5" />
                            <div className="card-body">
                              <p className="card-text">Project 5</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="card" >
                            <img className="card-img-top" src="https://placehold.it/200x200" alt="Project6" />
                            <div className="card-body">
                              <p className="card-text">Project 6</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
              <div className="container">
                <h1 className="SubjectTitle">Profile</h1>
                <hr id="titleLine" />
                <div id="smallLayout" className="row">
                  <div className="col-auto">
                    <div id="portfolioContent">
                      <div className="row">
                        <div className="col-6">
                          <div className="card" >
                          <a href="https://cprom.github.io/running-wild/"><img className="card-img-top" src="https://qlhuynh949.github.io/react-portfolio/assets/images/UCIEats.png"
                              alt="UCI Eats" height="200px" width="200px" /></a>
                            <div className="card-body">
                              <p className="card-text"><a href="https://cprom.github.io/running-wild/">UCI Eats</a> - An application to help plan out
                              a weekend</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="card" >
                          <img className="card-img-top" src="https://qlhuynh949.github.io/react-portfolio/assets/images/eFlow.png" alt="eFlow" height="200px" width="200px" />
                            <div className="card-body">
                              <p className="card-text"><a href="https://github.com/ariasadeghi530/eFlow-/">eFlow GitHub</a></p>
                              <p className="card-text"><a href="https://frozen-atoll-04274.herokuapp.com/">eFlow Heroku Deployment</a> - eFlow is an only trade, buy, sell web application for electronics, automotive and apparel</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="card" >
                            <img className="card-img-top" src="https://placehold.it/200x200" alt="Project3" />
                            <div className="card-body">
                              <p className="card-text">Project 3</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="card" >
                            <img className="card-img-top" src="https://placehold.it/200x200" alt="Project4" />
                            <div className="card-body">
                              <p className="card-text">Project 4</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="card" >
                            <img className="card-img-top" src="https://placehold.it/200x200" alt="Project5" />
                            <div className="card-body">
                              <p className="card-text">Project 5</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="card" >
                            <img className="card-img-top" src="https://placehold.it/200x200" alt="Project6" />
                            <div className="card-body">
                              <p className="card-text">Project 6</p>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  )
}

export default Portfolio;
