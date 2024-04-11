import React from "react";
import "./Contact.css";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <div className="contact" id="cont">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 colxl-6 col-sm-12">
              <div className="card1">
                <div className="row broder-line">
                  <img
                    src="https://cdn.pixabay.com/photo/2019/05/10/14/23/contact-us-4193637_640.jpg"
                    alt="contact"
                    className="image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6>
                      Contact With
                      <BsLinkedin color="blue" size="30" className="ms-2" />
                      <BsGithub color="black" size="30" className="ms-2" />
                      <BsFacebook color="blue" size="30" className="ms-2" />
                    </h6>
                  </div>

                  <div className="row px-1 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-1">
                    <label>Email: anandpathak28@gmail.com</label>
                    <label>Mobile: 8866077088</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
