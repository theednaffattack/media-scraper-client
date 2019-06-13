import React from "react";
import posed from "react-pose";
import styled from "styled-components";

export interface IZoomImageProps {
  imageWidth: string | number;
  imageHeight: string | number;
  src: string;
  playerVisibility: string;
}

const PrepImage = styled.img`
  position: "static";
  width: auto;
  height: auto;
  /* max-width: 100%;
  max-height: 100%; */
`;

const PrepDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: static;
`;

const transition = {
  duration: 400,
  ease: [0.08, 0.69, 0.2, 0.99]
};

const animationConfig = {
  zoomedIn: {
    // applyAtEnd: { position: "fixed" },
    position: "absolute",
    // left: "25%",
    // left: 0,
    // right: 0,
    // bottom: 0,
    // width: "100%",
    flip: true,
    transition,
    // zIndex: 9999,

    // width: "auto",
    // height: "auto",
    maxHeight: "250px"
  },
  zoomedOut: {
    position: "static",
    width: "100%",
    height: "100%",
    // maxWidth: "100%",
    // maxHeight: "100%",
    flip: true,
    transition,
    zIndex: 9999
  }
};

const PosedFlex = posed(PrepDiv)(animationConfig);

const MyImage = posed.img(animationConfig);

class ZoomImage extends React.Component<IZoomImageProps> {
  render() {
    const {
      imageWidth,
      imageHeight,
      src,
      playerVisibility,
      width,
      ...props
    } = this.props;

    return (
      <PosedFlex
        pose={playerVisibility === "large" ? "zoomedIn" : "zoomedOut"}
        width="55px"
        // maxHeight="200px"
        // flexDirection="column"
        // className="image-frame"
        // border="2px pink solid"
        // position="relative"
        // width={1}
        // style={{ width: imageWidth, height: imageHeight }}
      >
        <MyImage height="100%" src={src} />
        {/* <Image src={src} /> */}
      </PosedFlex>
    );
  }
}

export default ZoomImage;
