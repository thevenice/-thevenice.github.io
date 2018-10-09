import React from "react";
import DP from "../../assets/img/DPpro.jpg";
import AG3A1 from "./AG3A1";

const About = props => (
  <div className="wrapper">
    <div>{/*''*/}</div>
    {/* // grid parent */}
    <div className="AGP">
      {/* grid children area */}
      <div className="AG1">
        {/* AG1 2 Children */}
        <div className="AG1A">
          <img src={DP} alt="DP" />
        </div>
        <div className="AG1B">
          <p className="AG1B1">Web Developer</p>
          <p className="AG1B2">
            Hey ! I am Prakash Pawar and i am Self Taught Web Dev Working With
            JS and React.
          </p>
        </div>
      </div>

      <div className="AG3">
        {/* design(ui, ux, grid, bootstrap) 2)development 3)framework */}
        <div className="AG3A">
          <AG3A1 iknow={props.iknow} />
        </div>
      </div>
      <div className="AG2">
        <h3 className="AG2A">Work Flow</h3>
        <span className="AG2B">
          <div>
            <i className="fab fa-html5 fa-3x" />
          </div>
          <div>
            <i className="fab fa-css3-alt fa-3x" />
          </div>
          <div>
            <i className="fab fa-js-square fa-3x" />
          </div>
          <div>
            <i className="fab fa-react fa-3x" />
          </div>
        </span>
      </div>
    </div>
    <div>{/*''*/}</div>
  </div>
);
export default About;
