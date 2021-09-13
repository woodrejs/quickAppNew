import React from "react";
import { ScrollView, View } from "react-native";

import HorizontalGalleryImage from "./HorizontalGalleryImage";
import { style } from "./index.style";

const HorizontalImagesGallery = ({ images }) => {
  return (
    <ScrollView style={style.container} horizontal>
      {images &&
        images.map(({ standard, id }) => (
          <HorizontalGalleryImage key={id} src={standard} />
        ))}
    </ScrollView>
  );
};
export default HorizontalImagesGallery;
