import React from "react";
import { ImageBackground } from "react-native";

import { style } from "./index.style";

const HorizontalGalleryImage = ({ src }) => {
  return (
    <ImageBackground
      style={style.container}
      imageStyle={style.image}
      source={{ uri: src }}
    />
  );
};
export default HorizontalGalleryImage;
