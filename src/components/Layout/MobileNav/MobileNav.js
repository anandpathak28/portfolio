import React, { useState } from "react";
import "./MobileNav.css";
import { Link } from "react-scroll";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuFold } from "react-icons/ai";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
  FcVoicePresentation,
} from "react-icons/fc";

const MobileNav = () => {
  const [open, setopen] = useState(false);

  const handleOpen = () => {
    setopen(!open);
  };

  const handleMenuClick = () => {
    setopen(false);
  };
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <AiOutlineMenuFold
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          ) : (
            <GiHamburgerMenu
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          )}

          <span className="mobile-nav-title">My Portfolio App</span>
        </div>
        {open && (
          <div className="mobile-nav-menu">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={handleMenuClick}
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
                  onClick={handleMenuClick}
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
                  onClick={handleMenuClick}
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
                  onClick={handleMenuClick}
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
                  onClick={handleMenuClick}
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
                  onClick={handleMenuClick}
                >
                  <FcVideoProjector />
                  Projects
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="cert"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={handleMenuClick}
                >
                  <FcVoicePresentation />
                  Certification
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="cont"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={handleMenuClick}
                >
                  <FcBusinessContact />
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
