import React from "react";
import styled from "styled-components";
import { Box as BoxBase, Button, Flex as FlexBase, Image, Text } from "rebass";
import {
  backgroundImage,
  borders,
  display,
  maxWidth,
  minHeight,
  minWidth,
  position,
  top,
  left,
  right,
  bottom,
  zIndex
} from "styled-system";

export { Button, Image, Text };

export const Box = styled(BoxBase)`
  ${borders}
`;

export const MinHeightFlex = styled(FlexBase)`
  ${borders}
  ${display}
  ${minHeight}
`;

export const Flex = styled(FlexBase)`
  ${borders}
  ${minWidth}
  ${maxWidth}
`;

export const FlexMax = styled(FlexBase)`
  ${borders}
  ${minHeight}
`;

export const AbWrapper = styled(FlexBase)`
${borders}
${position}
${top}
${left}
${right}
${bottom}
${zIndex}
${backgroundImage}
`;
