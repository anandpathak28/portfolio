import React from "react";
import "./About.css";
import photo from "../../images/NewPhoto.png";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12">
            <img src={photo} alt="img" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About Me</h1>
            <p>
              Dedicated and skilled Developer with experience in designing,
              developing and maintaining Web / Mobile Applications. Possessing a
              strong understanding of technologies like React Js, React Native,
              Node Js, JavaScript. Proven track record of delivering high
              quality solutions within project deadlines. Seeking to leverage
              expertise in Frontend development to contribute to the success of
              a dynamic team.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
