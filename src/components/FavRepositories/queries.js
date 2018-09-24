
import gql from 'graphql-tag';

import { REPOSITORY_FRAGMENT } from '../Repository';

export const GET_STAR_REPOSITORIES = gql`
  {
    viewer {
      name
      starredRepositories(last: 10) {
        nodes {
          ...repositoryInfo
        }
      }
    }
  }

  ${REPOSITORY_FRAGMENT}
`;
