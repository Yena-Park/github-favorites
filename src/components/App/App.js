import React, { Component } from "react";

import Header from "../Header";
import FavRepositories from "../FavRepositories";
import SearchRepositories from "../SearchRepositories";

class App extends Component {
  state = {
    input: "",
    isSearchRequsted: null,
  };

  handleSearch = value => {
    this.setState({
      isSearchRequsted: {}
    });
  };

  handleChange = e => {
    const { value } = e.target;
    if (value === "") {
      this.setState({
        input: value,
        isSearchRequsted: {}
      });
    } else {
      this.setState({
        input: value
      });
    }
  };
  
  render() {
    const { input, isSearchRequsted } = this.state;
    const { handleChange, handleSearch } = this;

    return (
      <div>
        <Header />
        <SearchRepositories
          value={input}
          isSearchRequsted={isSearchRequsted}
          onChange={handleChange}
          onSearch={handleSearch}
        />
        <FavRepositories />
      </div>
    );
  }
}

export default App;
