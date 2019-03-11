import React, { Component } from "react";
import Projects from "../Projects";
import SocialProfiles from "../SocialProfiles";
import profile from "../assets/david.jpg";
import Title from "./Title";

class App extends Component {
  state = {
    displayBio: false
  };

  // use arrow functions to access this
  toggleBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };
  render() {
    // destructuring state to avoid always usimg this.state
    const { displayBio } = this.state;

    return (
      <div>
        <img src={profile} alt="profile" className="profile" />
        <h1>Hello!</h1>
        <p>My name is Kelechi </p>
        <Title />
        <p>I have great desire to work on innovative and exciting projects</p>
        {displayBio ? (
          <div>
            <p>I live in Siegburg, Germany and i code Everyday</p>
            <p>I enjoy working with Javascript and Python </p>
            <p>
              For Javascript i use React and Vue while for Python i use Django
              and Flask
            </p>
            <button onClick={this.toggleBio}>Show less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleBio}>Read more</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
