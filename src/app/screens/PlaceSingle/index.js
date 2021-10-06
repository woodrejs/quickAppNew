import React, { useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
//components
import LargeImageCard from "../../components/LargeImageCard";
import HorizontalImagesGallery from "../../components/HorizontalImagesGallery";
import LocalizationMapSection from "../../components/LocalizationMapSection";
import CTAButtonsSection from "../../components/CTAButtonsSection";
import InfoIconsSection from "../../components/InfoIconsSection";
import ContactSection from "../../components/ContactSection";
import LoadingSection from "../../components/LoadingSection";
import RenderHtmlSection from "../../components/RenderHtmlSection";
//utils & styles
import { style } from "./index.style";
import { getSinglePlaceData } from "../../utils/fetchFunctions";
import { setData, setIsLoaded } from "../../redux/single.slice";

const PlaceSingle = ({ navigation }) => {
  const variant = "places";
  const { id, data, loaded } = useSelector(({ singleSlice }) => singleSlice[variant]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function init() {
      const data = await getSinglePlaceData(id);
      dispatch(setData([variant, data]));
    }
    init();

    return () => dispatch(setIsLoaded([variant, false]));
  }, []);

  if (loaded) {
    const { images, title, location, venue } = data;
    const { mainImage, address, longDescription } = data;
    const { large, standard } = mainImage;
    const { email, telephone } = venue;

    return (
      <>
        <ScrollView style={style.container}>
          <LargeImageCard img={large} title={title} address={address} />
          <InfoIconsSection venue={venue} />
          <RenderHtmlSection source={longDescription} style={style.description} />
          <HorizontalImagesGallery images={images} />
          <Text style={style.title} children={title} />
          <Text style={style.subTitle} children={address} />
          <ContactSection email={email} telephone={telephone} />
          <LocalizationMapSection location={location} />
        </ScrollView>
        <CTAButtonsSection data={data} />
      </>
    );
  } else return <LoadingSection />;
};
export default PlaceSingle;
