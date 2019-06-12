import React from "react";
import posed from "react-pose";
import styled from "styled-components";

import { Image } from "../../components/BaseElements";

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

const transition = {
  duration: 400,
  ease: [0.08, 0.69, 0.2, 0.99]
};

const animationConfig = {
  zoomedIn: {
    // applyAtEnd: { position: "fixed" },
    position: "fixed",
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
    width: "200px",
    flip: true,
    transition
    // zIndex: 9999,

    // width: "auto",
    // height: "auto"
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

const MyImage = posed.img(animationConfig);

class ZoomImage extends React.Component<IZoomImageProps> {
  render() {
    const {
      imageWidth,
      imageHeight,
      src,
      playerVisibility,
      ...props
    } = this.props;

    return (
      <div
        className="image-frame"
        // style={{ width: imageWidth, height: imageHeight }}
      >
        {playerVisibility}
        <MyImage
          pose={playerVisibility === "large" ? "zoomedIn" : "zoomedOut"}
          src={src}
        />
      </div>
    );
  }
}

export default ZoomImage;
