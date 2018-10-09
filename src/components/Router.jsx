import React, { Component } from "react";
import Navbar from "./Layout/Navbar";
// import MainPage from "../components/Layout/MainPage";
import "../App.css";
// import Hero from "../components/Layout/Hero";
import Footer from "../Footer";
// import SVG from "../assets/undraw_programming_2svr.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./Layout/NotFound";
import About from "./Layout/About";
import BlogList from "./BlogList";
import Project from "./Layout/Project";
// import App from "../App";

class Router extends Component {
  state = {
    detailArray: [
      { name: "abc", age: 11, email: "abc@qwz.com" },
      { name: "aaqq", age: 21, email: "sss@qwz.com" },
      { name: "wwee", age: 31, email: "ccc@qwz.com" },
      { name: "assee", age: 41, email: "zzz@qwz.com" }
    ],
    footer: {
      socials: {
        github: "www.github.com/thevenice",
        instagram: "www.instagram.com/thevenicelive",
        linkedin: "www.linkedin.com/thevenice",
        codepen: "www.codepen.com/thevenicelive",
        medium: "www.medium.com/thevenice",
        twitter: "www.twitter.com/thevenicelive"
      }
    },

    iknow: [
      {
        name: "design",
        h2: "Designing is a key",
        p:
          "Design of website attracts customer before the product itself. So i believe that working on designing before core funtionality accelerates the progress of development"
      },
      {
        name: "development",
        h2: "Javascript for everything",
        p:
          "I do work in JavaScript from the beginning, I think if someone knows how to work in JavaScript, most of the time they don't need another language for specific functionalites. \nJavaScript covered almost every aspect of Web Development. I learnt JavaScript from so many people in our open source world, and i am still learning because javascript is growing and getting better everyday."
      },
      {
        name: "framework",
        h2: "React and others",
        p: `React is a my main skill, I just love React. It's the most powerful and famous frontend library(yes library) in the world.\n Its like we can create lego pieces and make any stucture we like, no matter in what shape and size we want to create it.\n Feel Free to ask me Anything about react, maybe i will learn new things beacuse of your questions. And yeah i do know how Bulma, Bootstrap, Firebase, axios, and other few more libraries and APIs works.`
      }
    ],
    medium: {
      article1: {
        title:
          "Java introduction from the perspective of a JavaScript developer.",
        prevText:
          "Java is a high-level programming language & easy to understand.",
        tags: ["java", "javascript", "development"]
      },
      article2: {
        title: "Lets Understand React Basics",
        prevText:
          "This post is just an explanation of how things work in React. If you’ve no idea what React is then this post is specially for you, so lets get started.",

        tags: ["react", "javascript", "framework"]
      },
      article3: {
        title: "An in-depth look at Arrays",
        prevText:
          "In javascript one has to consider mastering Arrays, Variables, Loops, and Objects in their beginning phase.",

        tags: ["array", "javascript", "fundamentals"]
      },
      article4: {
        title: "This, Bind and Call in JavaScript",
        prevText:
          "we can’t set value to this, but as ES5 introduced methods for this function we now have several options to play with.",

        tags: ["this", "fundamentals", "javascript"]
      }
    }
  };
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar title={"prakashPawar"} />
          <Switch>
            <Route
              path="/blog"
              render={() => <BlogList medium={this.state.medium} />}
            />
            <Route path="/project" component={Project} />
            <Route
              exact
              path="/"
              render={() => <About iknow={this.state.iknow} />}
            />
            <Route
              path="/home"
              render={() => <About iknow={this.state.iknow} />}
            />
            <Route component={NotFound} />
          </Switch>
          <Footer details={this.state.footer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
