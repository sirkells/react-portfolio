import React, { Component } from "react";
import Header from "./Header";

const Joke = props => {
  const { id, setup, punchline } = props.joke;
  return (
    <p style={{ margin: 20 }}>
      {setup} <em>{punchline}</em>
    </p>
  );
};

class Jokes extends Component {
  state = { joke: {}, jokes: [] };

  componentDidMount() {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(res => res.json())
      .then(res => {
        this.setState({ joke: res });
      });
  }

  fetchTenJokes = () => {
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then(res => res.json())
      .then(res => {
        this.setState({ jokes: res });
      });
  };

  render() {
    return (
      <div>
        <h3>Highlighted Joke</h3>
        <Joke joke={this.state.joke} />
        <button onClick={this.fetchTenJokes}>Fetch Jokes</button>
        <h3>Ten Joke</h3>
        {this.state.jokes.map(joke => (
          <Joke key={joke.id} joke={joke} />
        ))}
      </div>
    );
  }
}

export default Jokes;
