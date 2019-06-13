import React from "react";
import { Box, Flex, Button } from "../../components/BaseElements";
import Icon from "react-geomicons";

function PlayerControls({
  handleSeekForward,
  handleSeekBackward,
  handlePlayerToggle,
  bigPlayerShowing,
  handlePlayMedia,
  playerStatus
}) {
  return (
    <Flex border="cromson" width={1} flexDirection="row">
      <Button
        onClick={handleSeekBackward}
        type="button"
        color="text"
        bg="transparent"
        width={1 / 3}
        role="switch"
      >
        <Icon size="35px" fill="brown" name="play" />
      </Button>
      <Button
        onClick={handlePlayMedia}
        type="button"
        color="text"
        bg="transparent"
        width={1 / 3}
        role="switch"
      >
        <Icon
          size="35px"
          fill="brown"
          name={playerStatus === "isPlaying" ? "pause" : "play"}
        />
      </Button>
      <Button
        onClick={handleSeekForward}
        type="button"
        border="lime"
        color="text"
        bg="transparent"
        width={1 / 3}
        role="switch"
      >
        <Icon size="35px" fill="brown" name="refresh" />
      </Button>
    </Flex>
  );
}

export default PlayerControls;
