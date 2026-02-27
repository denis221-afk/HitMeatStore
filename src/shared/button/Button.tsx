"use client";
import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";
import type { IPropsButton } from "@/shared/button/type";

const ButtonElement = ({ title, styles, _hover }: IPropsButton) => {
  return (
    <ChakraButton size="md" {...styles} _hover={_hover} width={200}>
      {title}
    </ChakraButton>
  );
};

export default ButtonElement;
