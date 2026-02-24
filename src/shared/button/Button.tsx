import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

interface IPropsButton {
  title: string;
  style?: React.CSSProperties;
  _hover?: Partial<React.CSSProperties>;
}
const ButtonElement = ({ title, style, _hover }: IPropsButton) => {
  return (
    <ChakraButton size="md" sx={style} _hover={_hover} width={200}>
      {title}
    </ChakraButton>
  );
};

export default ButtonElement;
