import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Footer = props => {
  console.log(props);
  const {
    instagram,
    twitter,
    medium,
    codepen,
    linkedin,
    github
  } = props.details.socials;
  return (
    <div className="footer text-light">
      <div className=" footContainer hire f1">
        <div className="f1a">
          <h2> Hire Me ?</h2>
        </div>
        <div className="f1b">
          <p>
            I can help you in designing and developing beautiful digital
            products that will define your business on network.
          </p>
        </div>
      </div>
      <div className="footContainer icons f2">
        <div className="f2a">
          <h2>{props.header}</h2>
        </div>
        <div className="f2b">
          <div className="iconRow">
            <Link className="iconBtn " to={instagram}>
              <i className="fab fa-instagram fa-lg " />
            </Link>

            <Link className="iconBtn" to={medium}>
              <i className="fab fa-medium fa-lg " />
            </Link>

            <Link className="iconBtn" to={linkedin}>
              <i className="fab fa-linkedin fa-lg " />
            </Link>

            <Link className="iconBtn" to={github}>
              <i className="fab fa-github fa-lg " />
            </Link>

            <Link className="iconBtn" to={codepen}>
              <i className="fab fa-codepen fa-lg " />
            </Link>

            <Link className="iconBtn" to={twitter}>
              <i className="fab fa-twitter fa-lg " />
            </Link>
          </div>
        </div>
        <div className="f2c">
          <span>
            Made With <i className="fas fa-heart" style={{ color: "red" }} /> By
            Prakash Pawar.
            {"          "}
            All Right Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  header: PropTypes.string.isRequired
};

Footer.defaultProps = {
  header: "Socials"
};

export default Footer;
