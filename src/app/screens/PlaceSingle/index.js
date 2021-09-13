import React, { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
//components
import LargeImageCard from "../../components/LargeImageCard";
import HorizontalImagesGallery from "../../components/HorizontalImagesGallery";
import LocalizationMapSection from "../../components/LocalizationMapSection";
import CTAButtonsSection from "../../components/CTAButtonsSection";
import InfoIconsSection from "../../components/InfoIconsSection";
import ContactSection from "../../components/ContactSection";
import LoadingSection from "../../components/LoadingSection";
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

  return (
    <>
      {placeDataLoaded ? (
        <>
          <ScrollView style={style.container}>
            <LargeImageCard
              img={placeData?.mainImage.large}
              title={placeData?.title}
              address={placeData?.address}
            />
            <InfoIconsSection venue={placeData?.venue} />
            <Text style={style.description}>{placeData?.longDescription}</Text>
            <HorizontalImagesGallery images={placeData?.images} />

            <Text style={style.title}>{placeData?.title}</Text>
            <Text style={style.subTitle}>{placeData?.address}</Text>
            <ContactSection
              email={placeData?.venue.email}
              telephone={placeData?.venue.telephone}
            />
            <LocalizationMapSection />
          </ScrollView>
          <CTAButtonsSection title="odwiedź stronę" />
        </>
      ) : (
        <LoadingSection />
      )}
    </>
  );
};
export default PlaceSingle;
