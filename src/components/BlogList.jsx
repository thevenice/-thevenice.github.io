import React from "react";
// import { Link } from "react-router-dom";
import Blog from "./Layout/Blog";
// import Loading from "./Loading";

class BlogList extends React.Component {
  render() {
    const img1 = "https://cdn-images-1.medium.com/max/2000/0*8Ub0ICt6VNXVQbPv";
    const img2 =
      "https://images.unsplash.com/photo-1495733014470-54e8000f94c3?ixlib=rb-0.3.5&s=eab5b70be414c3a13fc7e8b9289ab596&auto=format&fit=crop&w=1050&q=80";
    const img3 =
      "https://images.unsplash.com/photo-1519985397845-b6f5188870af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=82f2eeed989c3f88036b40eeffddf918&auto=format&fit=crop&w=1491&q=80";
    const img4 =
      "https://cdn-images-1.medium.com/max/2000/1*YAlUREAvzLP6V-Bnjo6_BA.jpeg";
    return (
      <div className="BlogList">
        <div className="BlogList_a">
          <a
            target="_blank"
            href="https://medium.com/@thevenice/java-introduction-from-the-perspective-of-a-javascript-developer-ab9171938570"
          >
            <Blog BlogProps={this.props.medium.article1} imgProp={img2} />
          </a>
          <a
            target="_blank"
            href="https://medium.com/@thevenice/lets-understand-react-basics-7c3da0a88708"
          >
            <Blog BlogProps={this.props.medium.article2} imgProp={img3} />
          </a>
          <a
            target="_blank"
            href="https://medium.com/@thevenice/an-in-depth-look-at-arrays-87b7586d57d2"
          >
            <Blog BlogProps={this.props.medium.article3} imgProp={img1} />
          </a>

          <a
            target="_blank"
            href="https://medium.com/@thevenice/this-bind-and-call-in-javascript-25bf983b78b"
          >
            <Blog BlogProps={this.props.medium.article4} imgProp={img4} />
          </a>
        </div>
      </div>
    );
  }
}

export default BlogList;
