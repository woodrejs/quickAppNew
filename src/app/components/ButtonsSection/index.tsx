import React from "react";
import { View } from "react-native";

import SectionIconButton from "./SectionIconButton";
import SectionButton from "./SectionButton";
import { style } from "./index.style";

const ButtonsSection = () => {
  return (
    <View style={style.container}>
      <SectionIconButton type="heart" />
      <SectionIconButton type="phone" />
      <SectionButton title="dodaj do planu" />
    </View>
  );
};
export default ButtonsSection;
