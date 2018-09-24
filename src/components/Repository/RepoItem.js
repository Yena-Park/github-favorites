import React from "react";
import { Mutation } from "react-apollo";
import styled from "styled-components";

import { GET_STAR_REPOSITORIES } from "../FavRepositories";
import { ADD_STAR_REPOSITORY, REMOVE_STAR_REPOSITORY } from "./mutations";
import RepoItemType from "../../enums/RepoItemType"

const buttonColorChooser = type => {
  if (type === RepoItemType.SEARCH) return "#FFFFFF";
  else if (type === RepoItemType.FAVORITE) return "#efe9ff";
};

const ButtonWrapper = styled.button`
  border: 0;
  outline: 0;
  color: blue;
  background-color: ${props => buttonColorChooser(props.type)};
  font-size: 20px; 
  text-decoration: underline;
  &: hover {
    color: #723fed;
  }
`;

const RepoItem = ({
  type,
  id,
  nameWithOwner,
  viewerHasStarred,
  primaryLanguage,
  releases
}) =>
  type === RepoItemType.FAVORITE && !viewerHasStarred ? null : (
    
    <tr key={id}>
      <td>{nameWithOwner}</td>
      <td>{primaryLanguage && primaryLanguage.name}</td>
      <td>{releases.nodes.length > 0 ? releases.nodes[0].name : "-"}</td>
      <td>
        {type === RepoItemType.SEARCH ? (
          !viewerHasStarred ? (
            <Mutation
              mutation={ADD_STAR_REPOSITORY}
              variables={{ repositoryId: id }}
              refetchQueries={[{query:GET_STAR_REPOSITORIES}]}
            >
              {(addStar, { data, loading, error }) => (
                <ButtonWrapper 
                  type={type}
                  onClick={addStar}>
                  Add
                </ButtonWrapper>
              )}
            </Mutation>
          ) : null
        ) : (
          <Mutation
            mutation={REMOVE_STAR_REPOSITORY}
            variables={{ repositoryId: id }}
          >
            {(removeStar, { data, loading, error }) => (
              <ButtonWrapper 
                type={type} 
                onClick={removeStar}>
                Remove
              </ButtonWrapper>
            )}
          </Mutation>
        )}
      </td>
    </tr>
  );

export default RepoItem;
