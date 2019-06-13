import React, { Component } from "react";
import Icon from "react-geomicons";

import {
  AbWrapper,
  Box,
  Flex,
  FlexMax,
  Text
} from "../../components/BaseElements";
import Layout from "../../components/Layout";
import { GetAllPodcastsComponent } from "../../generated/apolloComponents";
import BottomButtons from "./BottomButtons";
import ListOfPodcasts from "./ListOfPodcasts";
import { IPodcastPlayerProps, IPodcastPlayerState } from "./types";
import PlayerPopUp from "./PlayerPopUp";
import { isBrowser } from "../../lib/isBrowser";

// import OPEN_FLOOR from "../../static/audio/openfloor.mp3";

const buttonItems = [
  {
    icon: "1",
    text: "Listen Now"
  },
  {
    icon: "2",
    text: "Library"
  },
  {
    icon: "3",
    text: "Browse"
  },
  {
    icon: "4",
    text: "Search"
  }
];

const host = isBrowser ? window.location.host : "";

const prefix = "http://";

// const pathnamer = "http://localhost:8888/static/audio/openfloor.mp3";

const pathnamer = "OPEN_FLOOR";

const initialState = {
  episodeLink: "",
  episodeInfo: "",
  playerStatus: "paused",
  playerVisibility: "small",
  currentPlayingIndex: null,
  audioToPlay: ["http://localhost:8888/static/audio/openfloor.mp3"],
  playStatus: "PLAYING",
  imageUrl:
    "https://pbcdn1.podbean.com/imglogo/dir-logo/383865/383865_300x300.jpeg",
  soundLabel: ""
};

export default class PodcastPlayer extends Component<
  IPodcastPlayerProps,
  IPodcastPlayerState
> {
  constructor(props: IPodcastPlayerProps) {
    super(props);

    this.handlePlayMedia = this.handlePlayMedia.bind(this);
    this.handlePlayerToggle = this.handlePlayerToggle.bind(this);
    this.handleSeekForward = this.handleSeekForward.bind(this);
    this.handleSeekBackward = this.handleSeekBackward.bind(this);
    // this.handleIncreasePlayback = this.handleIncreasePlayback.bind(this);

    this.audioRef = React.createRef();

    this.state = {
      audioToPlay: initialState.audioToPlay,
      episodeLink: initialState.episodeLink,
      episodeInfo: initialState.episodeInfo,
      playerStatus: initialState.playerStatus,
      playerVisibility: initialState.playerVisibility,
      currentPlayingIndex: initialState.currentPlayingIndex,
      imageUrl: initialState.imageUrl
    };
  }

  handlePlayerToggle(event: React.MouseEvent) {
    // console.log(event.target.id);
    this.setState(prevState => ({
      playerVisibility:
        prevState.playerVisibility === "small" ? "large" : "small"
    }));
  }

  handlePlayMedia(event: React.MouseEvent) {
    console.log("PODCAST PLAYING");
    console.log(event);
    console.log(this.audioRef.current);
    if (this.state.playerStatus === "isPlaying") {
      this.setState({ playerStatus: "paused" });
      this.audioRef.current.pause();
    }
    if (this.state.playerStatus === "paused") {
      this.setState({ playerStatus: "isPlaying" });
      this.audioRef.current.play();
    }
  }

  //   handleIncreasePlayback(){

  //     // audio
  //     this.audioRef.current.playbackRate = 1.0;
  //   }

  handleSeekForward(event: any) {
    console.log(this.audioRef.current.currentTime);
    const newTime = 30 + this.audioRef.current.currentTime;

    this.audioRef.current.currentTime = newTime;
    this.audioRef.current.play().catch(error => console.log(error.message));
  }

  handleSeekBackward(event: any) {
    const newTime = Math.floor(this.audioRef.current.currentTime - 15);
    console.log("newTime");
    console.log(newTime);
    this.audioRef.current.currentTime = newTime;
    this.audioRef.current.play().catch(error => console.log(error.message));
  }

  render() {
    return (
      <Layout title="Listen Now">
        <audio
          type="audio/mp3"
          ref={this.audioRef}
          src={this.state.audioToPlay}
          //   src={this.state.audioToPlay[0]}
          style={{ display: "none" }}
        />
        <FlexMax
          minHeight="100vh"
          alignItems="center"
          flexDirection="column"
          px={2}
          border="lime"
          style={{
            position: "relative"
          }}
        >
          {/* <CreatePodcastComponent> */}
          <GetAllPodcastsComponent>
            {({
              data: dataGetAllPodcasts,
              error: errorGetAllPodcasts,
              loading: loadingGetAllPodcasts
            }) => {
              //   const { getAllPodcasts } = dataGetAllPodcasts;
              return (
                <>
                  <Text my={3} fontSize="1.8em" fontWeight={600}>
                    Listen Now
                  </Text>

                  <ListOfPodcasts
                    handlePlayMedia={this.handlePlayMedia}
                    getAllPodcasts={dataGetAllPodcasts.getAllPodcasts}
                  />
                </>
              );
            }}
          </GetAllPodcastsComponent>

          <AbWrapper
            width={[1, "860px"]}
            // top={80}
            border="2px crimson dotted"
            bg="#eee"
            flexDirection="column"
            alignItems="center"
            position="fixed"
            bottom={0}
          >
            {this.state.playerVisibility === "large" ? (
              <Flex
                border="lime"
                mb={3}
                mt={1}
                width={[1]}
                justifyContent="center"
                flexwrap="nowrap"
              >
                <Box width="20px">
                  <Icon
                    onClick={this.handlePlayerToggle}
                    size="100%"
                    fill="rgba(0,0,0,0.7)"
                    name="chevronDown"
                  />
                </Box>
              </Flex>
            ) : (
              ""
            )}

            <PlayerPopUp
              imageUrl={this.state.imageUrl}
              playerStatus={this.state.playerStatus}
              currentPlayingIndex={this.state.currentPlayingIndex}
              playerVisibility={this.state.playerVisibility}
              handlePlayerToggle={this.handlePlayerToggle}
              handlePlayMedia={this.handlePlayMedia}
              handleSeekForward={this.handleSeekForward}
              handleSeekBackward={this.handleSeekBackward}
            />

            <Flex
              border="lime"
              mb={3}
              mt={1}
              width={[1, "860px"]}
              alignItems="flex-end"
              justifyContent="flex-end"
              flexwrap="nowrap"
            >
              <BottomButtons buttonItems={buttonItems} />
            </Flex>
          </AbWrapper>
          {/* </CreatePodcastComponent> */}
        </FlexMax>
      </Layout>
    );
  }
}
