import React from "react";
import posed from "react-pose";
import { tween } from "popmotion";

import { Flex, MinHeightFlex, Text } from "../../components/BaseElements";
import MiniPlayer from "./MiniPlayer";

const PMinHeightFlex = posed(MinHeightFlex)({
  small: { height: "auto", flip: true, transition: tween, delayChildren: 300 },
  large: { height: "80vh", flip: true, transition: tween, delayChildren: 300 }
});

export interface PlayerPopUpProps {
  playerVisibility: string;
  handlePlayerToggle: any;
  currentPlayingIndex: null | number;
  handlePlayMedia: any;
  playerStatus: string;
  imageUrl: string;

  handleSeekForward: any;
  handleSeekBackward: any;
}

function PlayerPopUp({
  handleSeekForward,
  handleSeekBackward,
  handlePlayerToggle,
  playerVisibility,
  currentPlayingIndex,
  handlePlayMedia,
  playerStatus,
  imageUrl
}: PlayerPopUpProps) {
  return (
    <PMinHeightFlex
      width={[1]}
      alignItems="center"
      border="rebeccapurple"
      pose={playerVisibility === "large" ? "large" : "small"}
      display="flex"
      //   minHeight="100%"
      flexDirection="column"
      //   style={{
      //     minHeight: "400px"
      //   }}
    >
      <MiniPlayer
        handleSeekForward={handleSeekForward}
        handleSeekBackward={handleSeekBackward}
        imageUrl={imageUrl}
        playerStatus={playerStatus}
        playerVisibility={playerVisibility}
        currentPlayingIndex={currentPlayingIndex}
        handlePlayerToggle={handlePlayerToggle}
        handlePlayMedia={handlePlayMedia}
      />
    </PMinHeightFlex>
  );
}

export default PlayerPopUp;

// CODE STASH
// {playerVisibility === "small" ? (
//     <MiniPlayer
//       playerVisibility={playerVisibility}
//       currentPlayingIndex={currentPlayingIndex}
//       handlePlayerToggle={handlePlayerToggle}
//     />
//   ) : (
//     ""
//   )}
