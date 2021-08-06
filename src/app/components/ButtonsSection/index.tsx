import React from "react";
import { View } from "react-native";

import SectionIconButton from "./SectionIconButton";
import SectionButton from "./SectionButton";
import { style } from "./index.style";

type Props = {
  title: string;
};

const ButtonsSection: React.FC<Props> = ({ title }) => {
  return (
    <View style={style.container}>
      <SectionIconButton type="heart" />
      <SectionIconButton type="phone" />
      <SectionButton title={title} />
    </View>
  );
};
export default ButtonsSection;
