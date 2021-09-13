import React from "react";
import { View } from "react-native";

import InfoSectionIcon from "./InfoSectionIcon";
import { style } from "./index.style";

const InfoIconsSection = ({ venue }) => {
  // const { carParkAvailable, foodAndDrinkAvailable, disabledAccessAvailable } = venue;

  return (
    <View style={style.container}>
      <InfoSectionIcon
        title={venue?.carParkAvailable ? "bezpłatny" : "płatny"}
        type="parking"
      />
      <InfoSectionIcon
        title={venue?.disabledAccessAvailable ? "przystosowany" : "nie przystosowany"}
        type="disabled"
      />
      <InfoSectionIcon
        title={venue?.foodAndDrinkAvailable ? "dostępny" : "brak"}
        type="food"
      />
    </View>
  );
};
export default InfoIconsSection;
