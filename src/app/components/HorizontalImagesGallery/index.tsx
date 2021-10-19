import React from "react";
import { ScrollView, ImageBackground } from "react-native";

import { style } from "./index.style";

const HorizontalImagesGallery = ({ images = [] }) => {
  return (
    <ScrollView style={style.container} horizontal>
      {images.map(({ standard, id }) => (
        <ImageBackground
          key={id}
          style={style.box}
          imageStyle={style.image}
          source={{ uri: standard }}
        />
      ))}
    </ScrollView>
  );
};
export default HorizontalImagesGallery;
