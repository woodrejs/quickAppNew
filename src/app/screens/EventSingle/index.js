import React, { useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
//components
import LargeImageCard from "../../components/LargeImageCard";
import HorizontalImagesGallery from "../../components/HorizontalImagesGallery";
import LocalizationMapSection from "../../components/LocalizationMapSection";
import CTAButtonsSection from "../../components/CTAButtonsSection";
import InfoIconsSection from "../../components/InfoIconsSection";
import LoadingSection from "../../components/LoadingSection";
import RenderHtmlSection from "../../components/RenderHtmlSection";
//utils & styles
import { style } from "./index.style";
import { getSingleOfferData } from "../../utils/fetchFunctions";
import { setData, setIsLoaded } from "../../redux/singleOffer.slice";

const EventSingle = () => {
  const dispatch = useDispatch();

  const offerId = useSelector((state) => state.singleOfferSlice.id);
  const offerData = useSelector((state) => state.singleOfferSlice.data);
  const offerDataLoaded = useSelector((state) => state.singleOfferSlice.loaded);

  useEffect(() => {
    async function init() {
      const data = await getSingleOfferData(offerId);
      dispatch(setData(data));
    }
    init();

    return () => dispatch(setIsLoaded(false));
  }, []);

  if (offerDataLoaded) {
    const { mainImage, title, ticketing, startDate, venue } = offerData;
    const { longDescription, place, address, location } = offerData;
    const { images, name, longDescription: placeLongDescription } = place;
    const { large } = mainImage;

    return (
      <>
        <ScrollView style={style.container}>
          <LargeImageCard img={large} title={title} price={ticketing} date={startDate} />
          <InfoIconsSection venue={venue} />
          <RenderHtmlSection source={longDescription} style={style.description} />
          <Text style={style.title} children={name} />
          <Text style={style.subTitle} children={address} />
          <HorizontalImagesGallery images={images} />
          <RenderHtmlSection source={placeLongDescription} style={style.description} />
          <LocalizationMapSection location={location} />
        </ScrollView>
        <CTAButtonsSection title="dodaj do planu" />
      </>
    );
  } else return <LoadingSection />;
};
export default EventSingle;
