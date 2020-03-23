import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
    <section id="largeLayout" className="Main">
      <div className="row">
        <div className="col-1 indentColumn"></div>
        <div className="col-auto noLeft">
          <div className="container">
            <h1 className="SubjectTitle">Contact</h1>
            <hr id="titleLine" />
            <div id="largeLayout" className="row">
              <div className="col-auto">
                <form>
                  <div className="form-group">
                    <label htmlFor="Name">Name</label>
                    <input type="text" className="form-control" id="NameInput" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Email">Email</label>
                      <input type="email" className="form-control" id="EmailInput" placeholder="name@example.com" />
                    </div>
                      <div className="form-group">
                        <label htmlFor="TextArea">Message</label>
                        <textarea className="form-control" id="MessageInput" rows="3"></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
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
                <h1 className="SubjectTitle">Contact</h1>
                <hr id="titleLine" />
                <div id="smallLayout">
                  <form>
                    <div className="form-group">
                      <label htmlFor="Name">Name</label>
                      <input type="text" className="form-control" id="NameInput" placeholder="Your Name" />
                  </div>
                      <div className="form-group">
                        <label htmlFor="Email">Email</label>
                        <input type="email" className="form-control" id="EmailInput" placeholder="name@example.com" />
                  </div>
                        <div className="form-group">
                          <label htmlFor="TextArea">Message</label>
                          <textarea className="form-control" id="MessageInput" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                    </div>
            </div>
                </div>
              </div>
      </section>
      </>
  )
}

export default Contact;

