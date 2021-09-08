import React from "react";
import { View, ImageBackground } from "react-native";

import CardHeaderSection from "../CardHeaderSection";
import { style } from "./index.style";

const LargeImageCard = () => {
  return (
    <View style={style.container}>
      <ImageBackground
        style={style.box}
        imageStyle={style.image}
        source={require("../../../../assets/index_3.jpg")}
      >
        <CardHeaderSection
          title="Long name of some event"
          price="20 PLN"
          place="ul. Obornicka 22/20 51-113 Wrocław"
        />
      </ImageBackground>
    </View>
  );
};
export default LargeImageCard;
