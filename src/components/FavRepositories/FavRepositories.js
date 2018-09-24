import React from "react";
import { Query } from "react-apollo";
import styled from "styled-components";

import RepoList from "../Repository";
import Loading from "../Loading";
import Error from "../Error";

import { GET_STAR_REPOSITORIES } from "./queries";
import RepoItemType from "../../enums/RepoItemType"

const Wrapper = styled.div`
  background: #efe9ff;
  float: right;
  width: 50%;
  height: calc(100vh - 136px);
  text-align: center;
  font-family: "verdana", Helvetica, sans-serif;
  font-size: 20px;
`;

const FavRepositories = () => (
  <Query query={GET_STAR_REPOSITORIES}>
    {({ data, loading, error, onChange }) => {
      if (error) {
        return <Error error={error} />;
      }
    
      const { viewer } = data;
    
      if (loading || !viewer) {
        return <Loading />;
      }
      return (
        <Wrapper>
          <RepoList
            type={RepoItemType.FAVORITE}
            repositories={viewer.starredRepositories.nodes}
            onChange={onChange}
          />
        </Wrapper>
      );
    }}
  </Query>
);

export default FavRepositories;
