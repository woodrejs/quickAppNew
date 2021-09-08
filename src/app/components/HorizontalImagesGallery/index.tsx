import React from "react";
import { ScrollView } from "react-native";

import HorizontalGalleryImage from "./HorizontalGalleryImage";
import { style } from "./index.style";

const HorizontalImagesGallery = () => {
  return (
    <ScrollView style={style.container} horizontal>
      <HorizontalGalleryImage />
      <HorizontalGalleryImage />
      <HorizontalGalleryImage />
      <HorizontalGalleryImage />
    </ScrollView>
  );
};
export default HorizontalImagesGallery;
