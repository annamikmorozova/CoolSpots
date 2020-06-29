import React from "react";
import {Col} from "reactstrap";
import {GoMarkGithub} from "react-icons/go";
import {AiOutlineLinkedin} from "react-icons/ai";
import {FaRegCopyright} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <Col size={6} className="footer-col">
          <span className="footer-title">Cool Spots</span>
          <span className="description">
            Share your favorite spots in the city with friends. Finding best places in the city has never been easier!
          </span>
          <div className="github-box">
            <a target="_blank"
              className="github"
              href="https://github.com/annamikmorozova/CoolSpots"
            >
              {" "}
              GitHub <GoMarkGithub color="black" size={32} />
            </a>
          </div>
          <span className="year">June 2020</span>
          <span className="copyright">
            <FaRegCopyright size={23} />Copyright: 
            <a target="_blank"
            href="https://www.linkedin.com/in/morozovaanna/"
            className="copyright-name"
          >
            <AiOutlineLinkedin size={25} />Anna Morozova
          </a>
          </span>
        </Col>
      </footer>
    </div>
  );
};

export default Footer;