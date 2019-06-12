import React from "react";

import { Button, Flex, Text } from "../../components/BaseElements";
import { IBottomButton } from "./types";

function BottomButtons({ buttonItems }: IBottomButton[]) {
  return (
    <>
      {buttonItems.map((buttoninfo: IBottomButton, index: number) => (
        <Button
          width={1 / 4}
          p={0}
          key={index}
          border="rebeccapurple"
          color="text"
          bg="transparent"
          type="button"
        >
          <Text color="#adadad" fontSize="1.5em">
            {buttoninfo.icon}
          </Text>

          <Text p={0} m={0} color="#adadad" fontSize=".6em">
            {buttoninfo.text}
          </Text>
        </Button>
      ))}
    </>
  );
}

export default BottomButtons;
