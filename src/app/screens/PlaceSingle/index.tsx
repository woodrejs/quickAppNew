import React from "react";
import { ScrollView, Text } from "react-native";
//components
import LargeImageCard from "../../components/LargeImageCard";
import HorizontalImagesGallery from "../../components/HorizontalImagesGallery";
import LocalizationMapSection from "../../components/LocalizationMapSection";
import CTAButtonsSection from "../../components/CTAButtonsSection";
import InfoIconsSection from "../../components/InfoIconsSection";
import ContactSection from "../../components/ContactSection";
//utils & styles
import { style } from "./index.style";

const PlaceSingle = () => {
  return (
    <>
      <ScrollView style={style.container}>
        <LargeImageCard />
        <InfoIconsSection />
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
        <HorizontalImagesGallery />

        <Text style={style.title}>Name of place</Text>
        <Text style={style.subTitle}>ul. Obornicka 22/20 51-113 Wrocław</Text>
        <ContactSection />
        <LocalizationMapSection />
      </ScrollView>
      <CTAButtonsSection title="odwiedź stronę" />
    </>
  );
};
export default PlaceSingle;
