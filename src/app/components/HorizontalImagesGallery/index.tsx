import React from "react";
import { ScrollView } from "react-native";

import HorizontalGalleryImage from "./HorizontalGalleryImage";
import { style } from "./index.style";

const HorizontalImagesGallery = ({ images }) => {
  return images ? (
    <ScrollView style={style.container} horizontal>
      {images &&
        images.map(({ standard, id }) => (
          <HorizontalGalleryImage key={id} src={standard} />
        ))}
    </ScrollView>
  ) : null;
};
export default HorizontalImagesGallery;
