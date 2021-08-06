import React from "react";
import { View } from "react-native";

import SectionIcon from "./SectionIcon";
import { style } from "./index.style";

const IconsSection = () => {
  return (
    <View style={style.container}>
      <SectionIcon title="bezpłatny" type="parking" />
      <SectionIcon title="przystosowany" type="disabled" />
      <SectionIcon title="dostępny" type="food" />
    </View>
  );
};
export default IconsSection;
