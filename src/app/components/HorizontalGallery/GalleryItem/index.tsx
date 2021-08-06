import React from "react";
import { ImageBackground } from "react-native";

import { style } from "./index.style";

const GalleryItem = () => {
  return (
    <ImageBackground
      style={style.container}
      imageStyle={style.image}
      source={require("../../../../../assets/index_3.jpg")}
    />
  );
};
export default GalleryItem;
