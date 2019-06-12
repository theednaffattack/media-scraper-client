import { gql } from "apollo-boost";

export const getOnePodcastQuery = gql`
  query GetOnePodcast($name: String!) {
    getOnePodcast(name: $name) {
      id
      name
      image
      title
      feedLink
      episodes {
        id
        url
        text
        date
      }
    }
  }
`;
