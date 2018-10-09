import React from "react";
// import { Link } from "react-router-dom";

class Blog extends React.Component {
  render() {
    return (
      <div className="Blog1">
        <div className="Blog1_child">
          <img src={this.props.imgProp} alt="poster" />
          <h1>{this.props.BlogProps.title}</h1>
          <p>{this.props.BlogProps.prevText}</p>
        </div>
      </div>
    );
  }
}
export default Blog;
