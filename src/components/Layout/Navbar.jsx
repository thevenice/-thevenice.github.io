import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = props => {
  // const { title } = props;
  return (
    <nav className="navbar">
      <div className="nav1">
        <Link className="nav1A" to="/">
          Prakash
          <span>Pawar</span>
        </Link>
      </div>
      <ul className="nav2">
        <Link className="nav2A" to="/">
          About
        </Link>

        <Link className="nav2B" to="/blog">
          Blog
        </Link>

        <Link className="nav2C" to="/project">
          Project
        </Link>
      </ul>
    </nav>
  );
};

Navbar.deafultProps = {
  title: "TITLE HERE"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};
export default Navbar;
