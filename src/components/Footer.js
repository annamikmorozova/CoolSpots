import React from 'react';
import {Col} from 'reactstrap';
import {GoMarkGithub} from 'react-icons/go';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {FaRegCopyright} from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <Col className="footer-col">
          <span className="footer-title">Cool Spots</span>
          <span className="description">
            Make your own map of cool spots. Share it with friends! 
          </span>
          <div className="github-box">
            <a
              className="github"
              href="https://github.com/annamikmorozova/CoolSpots"
            >
              {' '}
              GitHub <GoMarkGithub color="black" size={32} />
            </a>
          </div>
          <span className="year">June 2020</span>
        </Col>
        <Col className="footer-col-2">
          <span className="copyright">
            <FaRegCopyright size={23} />Copyright:
          </span>
          <a
            href="https://www.linkedin.com/in/morozovaanna/"
            className="copyright-name"
          >
            <AiOutlineLinkedin size={25} />Anna Morozova
          </a>
        </Col>
      </footer>
    </div>
  );
};

export default Footer;