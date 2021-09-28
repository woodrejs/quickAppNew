import React from "react";
import { View } from "react-native";

import InfoSectionIcon from "./InfoSectionIcon";
import { style } from "./index.style";

const InfoIconsSection = ({ venue }) => {
  const { carParkAvailable, foodAndDrinkAvailable, disabledAccessAvailable } = venue;

  return (
    <View style={style.container}>
      <InfoSectionIcon
        title={setTitle(carParkAvailable, "bezpłatny", "płatny")}
        type="parking"
      />
      <InfoSectionIcon
        title={setTitle(disabledAccessAvailable, "przystosowany", "nie przystosowany")}
        type="disabled"
      />
      <InfoSectionIcon
        title={setTitle(foodAndDrinkAvailable, "dostępny", "brak")}
        type="food"
      />
    </View>
  );
};
export default InfoIconsSection;

function setTitle(title, available, unavailable) {
  if (title === null) return "nieokreślono";

  return title ? available : unavailable;
}
