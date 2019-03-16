import React, { Component } from "react";

class Search extends Component {
  state = { searchQuery: "" };

  searchArtist = () => {
    this.props.searchArtist(this.state.searchQuery);
  };
  updateSearchQuery = event => {
    // console.log(event.target.value);
    this.setState({ searchQuery: event.target.value });
  };
  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.searchArtist();
    }
  };

  render() {
    return (
      <div className="ui action input">
        <input
          type="text"
          placeholder="Search for Artist"
          onChange={this.updateSearchQuery}
          onKeyPress={this.handleKeyPress}
        />
        <button className="ui icon button" onClick={this.searchArtist}>
          <i className="search icon" />
        </button>
      </div>
    );
  }
}

export default Search;
