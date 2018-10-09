import React from "react";
class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "COMING SOON"
    };
  }

  componentDidMount() {
    const incremented = this.state.text + "...";
    this.interval = window.setInterval(() => {
      this.state.text === incremented
        ? this.setState({ text: "COMING SOON" })
        : this.setState(CS => {
            return { text: CS.text + "." };
          });
    }, 500);
  }
  componentWillUnMount() {
    window.clearInterval(this.interval);
  }
  render() {
    return <h1 className="Loading">{this.state.text}</h1>;
  }
}

export default Loading;
