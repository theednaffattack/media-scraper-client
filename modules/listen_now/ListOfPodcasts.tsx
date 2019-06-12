import React from "react";
import format from "date-fns/format";

import { Flex, Image, Text } from "../../components/BaseElements";
import { IPodcast } from "./types";

function ListOfPodcasts({ getAllPodcasts }: any[]) {
  console.log("getAllPodcasts");
  console.log(getAllPodcasts);
  return (
    <>
      {getAllPodcasts.map((podcast: IPodcast, index: number) => (
        <Flex
          key={podcast.title + String(index)}
          my={2}
          width={[1, "860px"]}
          //   maxWidth="960"
          flexDirection="row"
          border="crimson"
        >
          <Flex
            border="lime"
            minWidth="110"
            maxWidth="200px"
            width={[1 / 3]}
            flexDirection="column"
            justifyContent="center"
          >
            <Image width="100%" src={podcast.image} />
          </Flex>
          <Flex
            pl={3}
            pr={3}
            width={[2 / 3]}
            flexDirection="column"
            justifyContent="center"
          >
            <Text color="#adadad" mt={2} fontWeight={600}>
              {format(podcast.episodes[0].date, "dddd")}
            </Text>
            <Text my={1} fontSize={["1.1em", "1.5em"]} fontWeight={600}>
              {podcast.episodes[0].text}
            </Text>
            <Text my={1} color="rebeccapurple" fontWeight={600}>
              {podcast.episodes.length} episodes
            </Text>
          </Flex>
        </Flex>
      ))}
    </>
  );
}

export default ListOfPodcasts;
