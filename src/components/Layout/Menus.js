import React from "react";
import { Link } from "react-scroll";
import "./Menus.css";

import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";
import photo from "../../images/photo.png";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src={photo} alt="profile pic" />
          </div>

          <div className="nav-item">
            <div className="nav-link">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcHome />
                Home
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcAbout />
                About
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="edu"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcReadingEbook />
                Education
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="exp"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcPortraitMode />
                Work Experience
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="tech"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcBiotech />
                Tech Stack
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="proj"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcVideoProjector />
                Projects
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="cont"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcBusinessContact />
                Contact
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="nav-item">
          <div className="nav-link">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <FcHome title="Home" />
            </Link>
          </div>
          <div className="nav-link">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <FcAbout title="About" />
            </Link>
          </div>
          <div className="nav-link">
            <Link
              to="edu"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <FcReadingEbook title="Education" />
            </Link>
          </div>
          <div className="nav-link">
            <Link
              to="exp"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <FcPortraitMode title="Work Experience" />
            </Link>
          </div>
          <div className="nav-link">
            <Link
              to="tech"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <FcBiotech title="Tech Stack" />
            </Link>
          </div>

          <div className="nav-link">
            <Link
              to="proj"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <FcVideoProjector title="Projects" />
            </Link>
          </div>

          <div className="nav-link">
            <Link
              to="cont"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <FcBusinessContact title="Contact" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Menus;
