import React, { Component } from "react";

class App extends Component {
  state = {
    displayBio: false,
    name: "Visitor"
  };

  // use arrow functions to access this
  toggleBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };
  render() {
    // destructuring state to avoid always usimg this.state
    const { displayBio } = this.state;
    const bio = displayBio ? (
      <div>
        <p>I live in Siegburg, Germany and i code Everyday</p>
        <p>I enjoy working with Javascript and Python </p>
        <p>
          For Javascript i use React and Vue while for Python i use Django and
          Flask
        </p>
        <button onClick={this.toggleBio}>Show less</button>
      </div>
    ) : (
      <div>
        <button onClick={this.toggleBio}>Read more</button>
      </div>
    );
    return (
      <div>
        <h1>Hello!</h1>
        <p>My name is Kelechi and i am a Software Engineer</p>
        <p>I have great desire to work on innovative and exciting projects</p>
        {bio}
      </div>
    );
  }
}

export default App;
