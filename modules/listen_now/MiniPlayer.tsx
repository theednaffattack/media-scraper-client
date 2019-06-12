import React from "react";
import ZoomImage from "./ZoomImage";
import { Flex, MinHeightFlex, Text } from "../../components/BaseElements";
import ListOfPodcasts from "./ListOfPodcasts";

const src =
  "https://static1.squarespace.com/static/5b475b2c50a54f54f9b4e1dc/5b4a5c2d88251b376ea105c1/5b4a5c4703ce643303f960e7/1531599999503/DSCF2776.jpg?format=1000w";

export const RowFragment = (currentPlayingIndex: number) => {
  return (
    <>
      <Flex
        justifyContent="center"
        flexDirection="column"
        border="crimson"
        width={3 / 5}
        // mr="auto"
      >
        <Text fontSize=".8em">text</Text>
        <Text fontSize=".8em"> more text</Text>
        <Text fontSize=".8em">blah</Text>
        {currentPlayingIndex}
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        border="crimson"
        width={1 / 10}
      >
        >
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        border="crimson"
        width={1 / 10}
      >
        skip
      </Flex>
    </>
  );
};

function MiniPlayer({
  handlePlayerToggle,
  currentPlayingIndex,
  playerVisibility
}: any) {
  return (
    <Flex width={1} border="lime" onClick={handlePlayerToggle}>
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        border="crimson"
        width={1 / 5}
        style={{
          position: "relative"
        }}
      >
        <ZoomImage
          playerVisibility={playerVisibility}
          imageHeight="100%"
          imageWidth="100%"
          src={src}
        />
      </Flex>
      {playerVisibility}
      {playerVisibility === "small" ? (
        <>
          <Flex>
            <Text fontSize=".8em">text</Text>
            <Text fontSize=".8em"> more text</Text>
            <Text fontSize=".8em">blah</Text>
            {currentPlayingIndex}
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            border="crimson"
            width={1 / 10}
          >
            >
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            border="crimson"
            width={1 / 10}
          >
            skip
          </Flex>
        </>
      ) : (
        " nope"
      )}
      {/* <Flex
        justifyContent="center"
        flexDirection="column"
        border="crimson"
        width={3 / 5}
        // mr="auto"
      >
        <Text fontSize=".8em">text</Text>
        <Text fontSize=".8em"> more text</Text>
        <Text fontSize=".8em">blah</Text>
        {currentPlayingIndex}
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        border="crimson"
        width={1 / 10}
      >
        >
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        border="crimson"
        width={1 / 10}
      >
        skip
      </Flex> */}
    </Flex>
  );
}

export default MiniPlayer;
