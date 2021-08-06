import React from "react";
import { ScrollView } from "react-native";

import GalleryItem from "./GalleryItem";
import { style } from "./index.style";

const HorizontalGallery = () => {
  return (
    <ScrollView style={style.container} horizontal>
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
    </ScrollView>
  );
};
export default HorizontalGallery;
