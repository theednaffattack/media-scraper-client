import React from "react";
import { NextContext } from "next";

import { AbWrapper, Flex, FlexMax, Text } from "../components/BaseElements";
import Layout from "../components/Layout";
import { GetAllPodcastsComponent } from "../generated/apolloComponents";
import BottomButtons from "../modules/listen_now/BottomButtons";
import ListOfPodcasts from "../modules/listen_now/ListOfPodcasts";
import PodcastPlayer from "../modules/listen_now/PodcastPlayer";

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

const ListenNow = () => {
  return (
    <PodcastPlayer />
    // <Layout title="Listen Now">
    //   {/* <CreatePodcastComponent> */}
    //   <GetAllPodcastsComponent>
    //     {({
    //       data: dataGetAllPodcasts,
    //       error: errorGetAllPodcasts,
    //       loading: loadingGetAllPodcasts
    //     }) => {
    //       const { getAllPodcasts } = dataGetAllPodcasts;
    //       return (
    //         <FlexMax
    //           minHeight="100vh"
    //           alignItems="center"
    //           flexDirection="column"
    //           px={2}
    //           border="lime"
    //           style={{
    //             position: "relative"
    //           }}
    //         >
    //           <Text my={3} fontSize="1.8em" fontWeight={600}>
    //             Listen Now
    //           </Text>

    //           <ListOfPodcasts getAllPodcasts={getAllPodcasts} />
    //         </FlexMax>
    //       );
    //     }}
    //   </GetAllPodcastsComponent>

    //   <AbWrapper
    //     width={[1]}
    //     border="crimson"
    //     alignItems="center"
    //     justifyContent="center"
    //     position="fixed"
    //     bottom={0}
    //   >
    //     <Flex
    //       border="lime"
    //       mb={3}
    //       mt={1}
    //       width={[1, "860px"]}
    //       alignItems="center"
    //       justifyContent="center"
    //       flexwrap="nowrap"
    //     >
    //       <BottomButtons buttonItems={buttonItems} />
    //     </Flex>
    //   </AbWrapper>
    //   {/* </CreatePodcastComponent> */}
    // </Layout>
  );
};

ListenNow.getInitialProps = ({
  query: { token }
}: NextContext<{ token: string }>) => {
  return {
    token
  };
};

export default ListenNow;
