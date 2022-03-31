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
