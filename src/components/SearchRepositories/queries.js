import gql from 'graphql-tag';

import { REPOSITORY_FRAGMENT } from '../Repository';

export const SEARCH_REPOSITORIES = gql`
  query($searchKeyword: String!){
    search(query: $searchKeyword, type: REPOSITORY, first: 10) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            ...repositoryInfo
          }
        }
      }
    }
  }

  ${REPOSITORY_FRAGMENT}
`;