import React from "react";
import ZoomImage from "./ZoomImage";
import Icon from "react-geomicons";
import { Flex, MinHeightFlex, Text } from "../../components/BaseElements";
import ListOfPodcasts from "./ListOfPodcasts";
import PlayerControls from "./PlayerControls";
import MiniPlayerControls from "./MiniPlayerControls";
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
        <Icon
          onClick={this.handlePlayerToggle}
          size="100%"
          fill="rgba(0,0,0,0.7)"
          name="play"
        />
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
  handleSeekForward,
  handleSeekBackward,
  imageUrl,
  handlePlayerToggle,
  currentPlayingIndex,
  playerVisibility,
  handlePlayMedia,
  playerStatus
}: any) {
  console.log("what is imageUrl", imageUrl);
  //   const visible = playerVisibility === "small" ? "isLarge" : "isSmall";
  const bigPlayerShowing = playerVisibility === "small";
  return (
    <Flex width={[1]} border="lime">
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        border="crimson"
        width={bigPlayerShowing ? 1 / 5 : 1}
        style={{
          position: "relative"
        }}
      >
        <ZoomImage
          playerVisibility={playerVisibility}
          imageHeight="100%"
          imageWidth="100%"
          src={imageUrl}
          onClick={handlePlayerToggle}
        />
        {!bigPlayerShowing ? (
          <PlayerControls
            handleSeekForward={handleSeekForward}
            handleSeekBackward={handleSeekBackward}
            playerStatus={playerStatus}
            bigPlayerShowing={bigPlayerShowing}
            handlePlayerToggle={handlePlayerToggle}
            handlePlayMedia={handlePlayMedia}
          />
        ) : (
          ""
        )}
      </Flex>
      {bigPlayerShowing ? (
        <MiniPlayerControls
          handleSeekForward={handleSeekForward}
          handleSeekBackward={handleSeekBackward}
          playerStatus={playerStatus}
          bigPlayerShowing={bigPlayerShowing}
          handlePlayerToggle={handlePlayerToggle}
          handlePlayMedia={handlePlayMedia}
        />
      ) : (
        ""
      )}
    </Flex>
  );
}

export default MiniPlayer;
