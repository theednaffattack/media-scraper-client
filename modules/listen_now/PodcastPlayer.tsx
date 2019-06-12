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

const initialState = {
  episodeLink: "",
  episodeInfo: "",
  playerStatus: "paused",
  playerVisibility: "small",
  currentPlayingIndex: null
};

export default class PodcastPlayer extends Component<
  IPodcastPlayerProps,
  IPodcastPlayerState
> {
  constructor(props: IPodcastPlayerProps) {
    super(props);

    this.handlePlayerToggle = this.handlePlayerToggle.bind(this);

    this.state = {
      episodeLink: initialState.episodeLink,
      episodeInfo: initialState.episodeInfo,
      playerStatus: initialState.playerStatus,
      playerVisibility: initialState.playerVisibility,
      currentPlayingIndex: initialState.currentPlayingIndex
    };
  }

  handlePlayerToggle(event: React.MouseEvent) {
    console.log(event.target.id);
    this.setState(prevState => ({
      playerVisibility:
        prevState.playerVisibility === "small" ? "large" : "small"
    }));
  }

  render() {
    return (
      <Layout title="Listen Now">
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
                    getAllPodcasts={dataGetAllPodcasts.getAllPodcasts}
                  />
                </>
              );
            }}
          </GetAllPodcastsComponent>

          <AbWrapper
            width={[1]}
            // top={80}
            // border="2px crimson dotted"
            bg="#eee"
            flexDirection="column"
            alignItems="flex-end"
            position="fixed"
            bottom={0}
          >
            {this.state.playerVisibility === "large" ? (
              <Flex
                border="lime"
                mb={3}
                mt={1}
                width={[1, "860px"]}
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
            {this.state.playerStatus === "paused" ? (
              <PlayerPopUp
                currentPlayingIndex={this.state.currentPlayingIndex}
                handlePlayerToggle={this.handlePlayerToggle}
                playerVisibility={this.state.playerVisibility}
              />
            ) : (
              ""
            )}

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
