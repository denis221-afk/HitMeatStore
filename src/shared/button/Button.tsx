import React from "react";

import type { IPropsButton } from "@/shared/button/type";

const ButtonElement = ({ title, styles }: IPropsButton) => {
  return <button style={styles}>{title}</button>;
};

export default ButtonElement;
