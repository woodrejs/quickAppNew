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
import { setData, setIsLoaded } from "../../redux/singlePlace.slice";

const PlaceSingle = ({ navigation }) => {
  const dispatch = useDispatch();

  const placeId = useSelector((state) => state.singlePlaceSlice.id);
  const placeData = useSelector((state) => state.singlePlaceSlice.data);
  const placeDataLoaded = useSelector((state) => state.singlePlaceSlice.loaded);

  useEffect(() => {
    async function init() {
      const data = await getSinglePlaceData(placeId);
      dispatch(setData(data));
    }
    init();

    return () => dispatch(setIsLoaded(false));
  }, []);

  if (placeDataLoaded) {
    const { id, images, title, location, venue } = placeData;
    const { mainImage, address, longDescription } = placeData;
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
        <CTAButtonsSection
          title="odwiedź stronę"
          data={{ id, img: standard, title, type: "places" }}
        />
      </>
    );
  } else return <LoadingSection />;
};
export default PlaceSingle;
