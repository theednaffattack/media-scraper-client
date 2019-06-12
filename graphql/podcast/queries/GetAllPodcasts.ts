import { gql } from "apollo-boost";

export const getAllPodcastsQuery = gql`
  query GetAllPodcasts {
    getAllPodcasts {
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
