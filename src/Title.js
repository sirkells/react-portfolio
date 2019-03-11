import React, { Component } from "react";

const TITLES = [
  "a Software Developer",
  "a football lover",
  "a lover of Music",
  "an enterprising young man"
];

class Title extends Component {
  state = {
    titleIndex: 0,
    fadeIn: true
  };

  componentDidMount() {
    this.timeOut = setTimeout(() => this.setState({ fadeIn: false }), 2000);
    this.animateTitle();
  }
  componentWillUnmount() {
    // removes all timeOut
    clearInterval(this.titleInterval);
    clearInterval(this.timeOut);
  }
  animateTitle = () => {
    this.titleInterval = setInterval(() => {
      const { titleIndex, fadeIn } = this.state;
      const titleIndexInc = (titleIndex + 1) % TITLES.length;
      this.setState({ titleIndex: titleIndexInc, fadeIn: true });
      this.timeOut = setTimeout(() => this.setState({ fadeIn: false }), 2000);
    }, 4000);
  };
  render() {
    const { titleIndex, fadeIn } = this.state;
    const title = TITLES[this.state.titleIndex];
    return (
      <p className={fadeIn ? "title-fade-in" : "title-fade-out"}>
        I am {title}
      </p>
    );
  }
}

export default Title;
