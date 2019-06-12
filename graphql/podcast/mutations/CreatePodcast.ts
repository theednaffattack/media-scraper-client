import { gql } from "apollo-boost";

export const changePasswordMutation = gql`
  mutation CreatePodcast($data: PodcastInput!) {
    createPodcast(data: $data) {
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
