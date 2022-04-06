// 6.4.2021
// Stores all GraphQL queries for the Keystone CMS

import { gql } from "@apollo/client";

export const LOAD_POSTS = gql`
  {
    posts {
      id
      title
      content{
        document
      }
      author{
        name
      }
    }
  }
`;
