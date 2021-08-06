import React from "react";
import { ScrollView, Text } from "react-native";

import LargeImgSection from "../../components/LargeImgSection";
import HorizontalGallery from "../../components/HorizontalGallery";
import LocalizationMap from "../../components/LocalizationMap";
import ButtonsSection from "../../components/ButtonsSection";
import IconsSection from "../../components/IconsSection";
import ContactSection from "../../components/ContactSection";

import { style } from "./index.style";

const PlaceSingle = () => {
  return (
    <>
      <ScrollView style={style.container}>
        <LargeImgSection />
        <IconsSection />
        <Text style={style.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </Text>
        <HorizontalGallery />

        <Text style={style.title}>Name of place</Text>
        <Text style={style.subTitle}>ul. Obornicka 22/20 51-113 Wrocław</Text>
        <ContactSection />
        <LocalizationMap />
      </ScrollView>
      <ButtonsSection title="odwiedź stronę" />
    </>
  );
};
export default PlaceSingle;
