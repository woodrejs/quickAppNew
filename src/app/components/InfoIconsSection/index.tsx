import React from "react";
import { View } from "react-native";

import InfoSectionIcon from "./InfoSectionIcon";
import { style } from "./index.style";

const InfoIconsSection = () => {
  return (
    <View style={style.container}>
      <InfoSectionIcon title="bezpłatny" type="parking" />
      <InfoSectionIcon title="przystosowany" type="disabled" />
      <InfoSectionIcon title="dostępny" type="food" />
    </View>
  );
};
export default InfoIconsSection;
