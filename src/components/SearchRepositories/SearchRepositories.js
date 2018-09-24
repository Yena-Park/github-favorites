import React, { Component } from "react";
import styled from "styled-components";

import SearchInput from "../SearchInput";
import SearchedRepositories from "./SearchedRepositories";

const Wrapper = styled.div`
  float: left;
  width: 50%;
  font-family: "verdana", Helvetica, sans-serif;
  font-size: 20px;
`;

class SearchRepositories extends Component {
  render() {
    const { value, isSearchRequsted, onChange, onSearch } = this.props;
    return (
      <Wrapper>
        <SearchInput value={value} onChange={onChange} onSearch={onSearch} />
        <SearchedRepositories
          value={value} 
          isSearchRequsted={isSearchRequsted}
          />
      </Wrapper>
    );
  }
}

export default SearchRepositories;
