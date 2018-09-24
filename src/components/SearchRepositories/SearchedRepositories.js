import React, { Component } from "react";
import { Query } from "react-apollo";

import RepoList from "../Repository";
import Loading from "../Loading";
import Error from "../Error";

import { SEARCH_REPOSITORIES } from "./queries";
import RepoItemType from "../../enums/RepoItemType"

class SearchedRepositories extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.isSearchRequsted !== nextProps.isSearchRequsted;
  }

  render() {
    const { value } = this.props;
    return (
      <Query query={SEARCH_REPOSITORIES} variables={{ searchKeyword: value }}>
        {({ data, loading, error }) => {
          if (error) {
            return <Error error={error} />;
          }

          const { search } = data;

          if (loading || !search) {
            return <Loading />;
          }

          const { edges } = search;

          // didFinishSearch();

          return (
            <RepoList
              type={RepoItemType.SEARCH}
              
              repositories={edges.map(edge => {
                const { node } = edge;
                return node;
              })}
            />
          );
        }}
      </Query>
    );
  }
}

export default SearchedRepositories;
