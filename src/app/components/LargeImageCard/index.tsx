import React from "react";
import { View, ImageBackground } from "react-native";

import CardHeaderSection from "../CardHeaderSection";
import { style } from "./index.style";

const LargeImageCard = ({
  img,
  title,
  address,
  price = null,
  hour = null,
  date = null,
}) => {
  return (
    <View style={style.container}>
      <ImageBackground style={style.box} imageStyle={style.image} source={{ uri: img }}>
        <CardHeaderSection
          title={title}
          price={price}
          place={address}
          hour={hour}
          date={date}
        />
      </ImageBackground>
    </View>
  );
};
export default LargeImageCard;
