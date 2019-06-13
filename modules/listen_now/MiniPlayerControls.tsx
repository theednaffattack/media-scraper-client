import React from "react";
import Icon from "react-geomicons";

import { Flex, MinHeightFlex, Text } from "../../components/BaseElements";

function MiniPlayerControls({
  handleSeekForward,
  currentPlayingIndex,
  handlePlayerToggle,
  handlePlayMedia,
  playerStatus
}) {
  return (
    <>
      <Flex
        onClick={handlePlayerToggle}
        justifyContent="center"
        flexDirection="column"
        border="crimson"
        width={3 / 5}
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
        onClick={handlePlayMedia}
        role="switch"
      >
        <Icon
          name={playerStatus === "isPlaying" ? "pause" : "play"}
          fill="brown"
        />
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        border="crimson"
        width={1 / 10}
        onClick={handleSeekForward}
      >
        <Icon name="refresh" fill="brown" />
      </Flex>
    </>
  );
}

export default MiniPlayerControls;
